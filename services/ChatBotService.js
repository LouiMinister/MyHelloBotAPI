import ChatBot from '../models/ChatBot';

class ChatBotService {
    constructor () {
        this.chatBot = new ChatBot();
    }
    
    async getSkillStartingScript(skillId){
        const skillStringScript = await this.chatBot.getSkillStartingScript(skillId);
        return skillStringScript;
    }
}

export default ChatBotService;
