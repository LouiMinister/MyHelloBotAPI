
import mysql from 'mysql';
import dbconfig from '../configs/db_config.json';
import getConnection from '../utils/db';

class ChatBot {
    constructor () {

    }
    
    async getFirstScript(skillId){
        const connection = await getConnection()
            .catch((err) => {
                throw err;
            });
        const rawQuery = `SELECT * FROM chatbot_scripts WHERE chatbot_skill_id = ${skillId} AND depth = 0 LIMIT 1`;
        const promise = new Promise( (resolve, reject) => {
            connection.query( rawQuery, (err, rows, field) => {
                if (err) { reject(err); }
                resolve(rows[0]);
            });
        }).catch( (err) => {
            throw err;
        }).then( (result) => {
            connection.release();
            return result;
        });
        return promise; 
    }

    async getScript(scriptId){
        const connection = await getConnection()
            .catch((err) => {
                throw err;
            });
        const rawQuery = `SELECT * FROM chatbot_scripts WHERE id = ${scriptId}`;
        const promise = new Promise( (resolve, reject) => {
            connection.query( rawQuery, (err, rows, field) => {
                if (err) { reject(err); }
                resolve(rows[0]);
            });
        }).catch( (err) => {
            throw err;
        }).then( (result) => {
            connection.release();
            return result;
        });
        return promise;
    }

    async getReplyScripts(scriptId){
        const connection = await getConnection()
            .catch((err) => {
                throw err;
            });
        const rawQuery = `SELECT * FROM chatbot_reply_scripts WHERE prev_chatbot_script_id = ${scriptId}`;
        const promise = new Promise( (resolve, reject) => {
            connection.query( rawQuery, (err, rows, field) => {
                if (err) { reject(err); }
                resolve(rows);
            });
        }).catch( (err) => {
            throw err;
        }).then( (result) => {
            connection.release();
            return result;
        });
        return promise;
    }

    async addSkillReview(user_id, chatbot_skill_id, rating_id, message){
        const connection = await getConnection()
            .catch((err) => {
                throw err;
            });
        const rawQuery = `INSERT INTO skill_reviews (user_id, chatbot_skill_id, rating_code, message) VALUES (${user_id}, ${chatbot_skill_id}, ${rating_id}, "${message}")`;
        const promise = new Promise( (resolve, reject) => {
            connection.query( rawQuery, (err, rows, field) => {
                if (err) { reject(err); }
                resolve();
            });
        }).catch( (err) => {
            throw err;
        }).then( (result) => {
            connection.release();
            return result;
        });
        return promise;
    }
}

export default ChatBot;
