
import mysql from 'mysql';
import dbconfig from '../configs/db_config.json';

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
    
    async getFirstScript(skillId){
        const rawQuery = `SELECT * FROM chatbot_scripts WHERE chatbot_skill_id = ${skillId} and depth = 0`;
        const promise = new Promise( (resolve, reject) => {
            this.connection.query( rawQuery, (err, rows, field) => {
                if (err) { reject(err); }
                resolve(rows);
            });
        }).catch( (err) => {
            throw err;
        });
        return promise;
    }
}

export default ChatBot;
