import express from 'express';
import VerifyController from '../controller/verify';
import VerifyService from '../service/verify';
import { getRedis } from '../loader/dbLoader';

const verifyRouter = express.Router();
const verifyService = new VerifyService(getRedis());
const verifyController = new VerifyController(verifyService);

// POST /api/verify/token
verifyRouter.post('/token', verifyController.setData);

// get /api/verify?token=asdasda.sdasd.asd.asd
verifyRouter.get('/token', verifyController.getData);

// DELETE /api/verify/token
verifyRouter.delete('/token', verifyController.deleteData);

export default verifyRouter;
