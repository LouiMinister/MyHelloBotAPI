import ChatBot from '../models/ChatBot';

class ChatBotService {
    constructor () {
        this.chatBot = new ChatBot();
    }
    
    async getFirstScript(skillId){
        const skillStringScript = await this.chatBot.getFirstScript(skillId);
        return skillStringScript;
    }
}

export default ChatBotService;
