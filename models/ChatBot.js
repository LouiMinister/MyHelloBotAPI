
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
        const rawQuery = `SELECT * FROM chatbot_scripts WHERE chatbot_skill_id = ${skillId} AND depth = 0 LIMIT 1`;
        const promise = new Promise( (resolve, reject) => {
            this.connection.query( rawQuery, (err, rows, field) => {
                if (err) { reject(err); }
                resolve(rows[0]);
            });
        }).catch( (err) => {
            throw err;
        });
        return promise;
    }

    async getScript(scriptId){
        const rawQuery = `SELECT * FROM chatbot_scripts WHERE id = ${scriptId}`;
        const promise = new Promise( (resolve, reject) => {
            this.connection.query( rawQuery, (err, rows, field) => {
                if (err) { reject(err); }
                resolve(rows[0]);
            });
        }).catch( (err) => {
            throw err;
        });
        return promise;
    }

    async getReplyScripts(scriptId){
        const rawQuery = `SELECT * FROM chatbot_reply_scripts WHERE prev_chatbot_script_id = ${scriptId}`;
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

    async addSkillReview(user_id, chatbot_skill_id, rating_id, message){
        const rawQuery = `INSERT INTO skill_reviews (user_id, chatbot_skill_id, rating_code, message) VALUES (${user_id}, ${chatbot_skill_id}, ${rating_id}, "${message}")`;
        const promise = new Promise( (resolve, reject) => {
            this.connection.query( rawQuery, (err, rows, field) => {
                if (err) { reject(err); }
                resolve();
            });
        }).catch( (err) => {
            throw err;
        });
        return promise;
    }
}

export default ChatBot;
