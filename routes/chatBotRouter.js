import express from 'express';
import ChatBotService from '../services/ChatBotService'
const router = express.Router();

const COLUMN_REFERENCE_ERROR = 1452;

const chatBotService = new ChatBotService();

router.get(/^\/skills\/(\d+)\/first-script$/, async (req, res, next) => {
    const skillId = parseInt(req.params[0], 10);
    const firstScript = await chatBotService.getFirstScript(skillId)
        .catch((err)=>{next(err)});

    if (firstScript != undefined){
        res.status(200).json(firstScript);
    } else if (firstScript == undefined){
        next();
    }
});

router.get(/^\/script\/(\d+)$/, async (req, res, next) => {
    const skillId = parseInt(req.params[0], 10);
    const firstScript = await chatBotService.getScript(skillId)
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

router.post(/^\/skills\/(\d+)\/reviews$/, async (req, res, next) => {
    const skillId = parseInt(req.params[0], 10);
    const param = {
        ...req.body, 
        chatbot_skill_id: skillId
    };
    chatBotService.addSkillReview(param)
        .then(()=>{
            res.status(200).send();
        })
        .catch((err)=>{
            if (err.errno == COLUMN_REFERENCE_ERROR){
                next();
            } else {
                next(err)
            }
        });
});

export default router;