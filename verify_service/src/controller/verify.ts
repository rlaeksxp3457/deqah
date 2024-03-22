import { Request, Response } from 'express';
import VerifyService from '../service/verify';

export default class VerifyController {
  verifyService: VerifyService;
  constructor(verifyService: VerifyService) {
    this.verifyService = verifyService;
  }

  setData = async (req: Request, res: Response) => {
    try {
      const { key, value, expire } = req.body;
      await this.verifyService.deleteData(key);
      await this.verifyService.setData(key, JSON.stringify(value), expire);
      res.status(200).json({ message: 'success' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  getData = async (req: Request, res: Response) => {
    try {
      const token: string = req.query.token as string;
      const data = await this.verifyService.getData(token);

      if (data) {
        await this.verifyService.deleteData(token);
        res.status(200).json({ message: 'success', data: JSON.parse(data) });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  deleteData = async (req: Request, res: Response) => {
    try {
      const token = req.body;
      await this.verifyService.deleteData(token);

      res.status(201).json({ message: 'success' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
}
