import ChatBot from '../models/ChatBot';

class ChatBotService {
    constructor () {
        this.chatBot = new ChatBot();
    }
    
    async getFirstScript(skillId){
        const skillStaringScript = await this.chatBot.getFirstScript(skillId).catch((err)=>{throw err;});
        return skillStaringScript;
    }

    async getScript(scriptId){
        const skillStaringScript = await this.chatBot.getScript(scriptId).catch((err)=>{throw err;});
        return skillStaringScript;
    }

    async getReplyScripts(scriptId){
        const replyScripts = await this.chatBot.getReplyScripts(scriptId).catch((err)=>{throw err;});
        if (replyScripts.length === 0) {
            return undefined;
        }
        return replyScripts;
    }
}

export default ChatBotService;
