import express from 'express';
import chatBotRouter from '../chatBotRouter';
const router = express.Router();

router.use('/chatbot', chatBotRouter);

export default router;