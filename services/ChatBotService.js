import ChatBot from '../models/ChatBot';

class ChatBotService {
    constructor () {
        this.chatBot = new ChatBot();
    }
    
    async getFirstScript(skillId){
        const skillStaringScript = await this.chatBot.getFirstScript(skillId).catch((err)=>{throw err;});
        return skillStaringScript;
    }
}

export default ChatBotService;
