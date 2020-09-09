import executeQuery from '../utils/db';

class ChatBot {
    constructor () {

    }
    
    async getFirstScript(skillId){
        const rawQuery = `SELECT * FROM chatbot_scripts WHERE chatbot_skill_id = ${skillId} AND depth = 0 LIMIT 1`;
        const rows = await executeQuery(rawQuery);
        return rows[0]; 
    }

    async getScript(scriptId){
        const rawQuery = `SELECT * FROM chatbot_scripts WHERE id = ${scriptId}`;
        const rows = await executeQuery(rawQuery);
        return rows[0]; 
    }

    async getReplyScripts(scriptId){
        const rawQuery = `SELECT * FROM chatbot_reply_scripts WHERE prev_chatbot_script_id = ${scriptId}`;
        const rows = await executeQuery(rawQuery);
        return rows; 
    }

    async addSkillReview(user_id, chatbot_skill_id, rating_id, message){
        const rawQuery = `INSERT INTO skill_reviews (user_id, chatbot_skill_id, rating_code, message) VALUES (${user_id}, ${chatbot_skill_id}, ${rating_id}, "${message}")`;
        const result = await executeQuery(rawQuery);
        return result;
        
    }
}

export default ChatBot;
