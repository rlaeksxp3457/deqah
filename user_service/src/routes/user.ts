import express from 'express';
import UserController from '../controller/user';
import UserService from '../service/user';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middlewaer/authenticate';

const userRouter = express.Router();
const prisma = new PrismaClient();
const userService = new UserService(prisma);
const userController = new UserController(userService);

// POST /api/user
userRouter.post('/', userController.createUser);

// POST /api/user/check
userRouter.post('/check', userController.checkUser);

// GET /api/user   req 는 같다 res.user = {user_id: 1, }
userRouter.get('/', authenticateToken, userController.loginedUser);

// GET /api/user/:id
userRouter.get('/:id([0-9]+)', userController.getUser);

export default userRouter;
