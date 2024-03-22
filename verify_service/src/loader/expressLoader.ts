import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import verifyRouter from '../routes/verify';

const expressLoader = async (app: Application) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/api/verify', (_: Request, res: Response) => {
    res.send('welcome to verify service!');
  });

  app.use('/api/verify', verifyRouter);
};

export default expressLoader;
