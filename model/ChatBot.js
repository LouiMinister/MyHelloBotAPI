
import mysql from 'mysql';
import dbconfig from '../config/db_config.json';

class ChatBot {
    constructor () {
        this.connection = mysql.createConnection(dbconfig);
        this.connection.connect( (err) => {   
            if (err) {     
              console.error('mysql connection error');     
              console.error(err);     
              throw err;   
            } 
        });
    }
    
    async getSkillStartingScript(skillId){
        const promise = new Promise( (resolve, reject) => { this.connection.query(
            `SELECT * FROM chatbot_scripts WHERE chatbot_skill_id = ${skillId} and depth = 0`, (err, rows, field) => {
                if (err) {
                    console.error(err);
                    throw err;
                }
            resolve(rows);
        })});
        return promise;
    }
}

export default ChatBot;
