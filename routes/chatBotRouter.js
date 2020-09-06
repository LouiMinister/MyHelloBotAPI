import express from 'express';
import ChatBotService from '../services/ChatBotService'
const router = express.Router();

const chatBotService = new ChatBotService();

router.get(/^\/skills\/(\d+)\/firstscript$/, async (req, res, next) => {
    const skillId = parseInt(req.params[0], 10);
    const firstScript = await chatBotService.getFirstScript(skillId)
        .catch((err)=>{next(err)});

    if (firstScript != undefined){
        res.status(200).json(firstScript);
    } else if (firstScript == undefined){
        next();
    }
});

router.get(/^\/script\/(\d+)\/reply-scripts$/, async (req, res, next) => {
    const skillId = parseInt(req.params[0], 10);
    const firstScript = await chatBotService.getReplyScripts(skillId)
        .catch((err)=>{next(err)});

    if (firstScript != undefined){
        res.status(200).json(firstScript);
    } else if (firstScript == undefined){
        next();
    }
});

export default router;