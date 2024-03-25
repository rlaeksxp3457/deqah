import { Request, Response } from 'express';
import { body } from '../types/request';
import UserService from '../service/user';

export default class UserController {
  userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }

  loginedUser = async (req: Request, res: Response) => {
    try {
      // @ts-ignore
      const { user_id } = req.user;
      const user = await this.userService.getUser(user_id);
      res.status(200).json({ message: 'success', user });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  getUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUser(id);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  createUser = async (req: Request, res: Response) => {
    try {
      const { email, sns_id, nickname, profile }: body = req.body;
      const user = await this.userService.createUser(email, sns_id, nickname, profile);

      res.status(201).json({ message: 'success', user });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  checkUser = async (req: Request, res: Response) => {
    try {
      const { sns_id } = req.body;
      const user = await this.userService.findUserBySnsId(sns_id);
      if (user) {
        res.status(200).json({ message: 'success', user_id: user.id });
      } else {
        res.status(404).json({ message: 'user not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      const user = await this.userService.updateUser(id, { name, email, password });
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.userService.deleteUser(id);
      res.status(204).json();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
