import ChatBot from '../models/ChatBot';

class ChatBotService {
    constructor () {
        this.chatBot = new ChatBot();
    }
    
    async getFirstScript(skillId){
        const skillStringScript = await this.chatBot.getFirstScript(skillId).catch((err)=>{throw err;});
        return skillStringScript;
    }
}

export default ChatBotService;
