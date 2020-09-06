import ChatBot from '../models/ChatBot';

class ChatBotService {
    constructor () {
        this.chatBot = new ChatBot();
    }
    
    async getFirstScript(skillId){
        const skillStaringScript = await this.chatBot.getFirstScript(skillId).catch((err)=>{throw err;});
        return skillStaringScript;
    }

    async getReplyScripts(scriptId){
        const replyScript = await this.chatBot.getReplyScripts(scriptId).catch((err)=>{throw err;});
        return replyScript;
    }
}

export default ChatBotService;
