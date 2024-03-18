import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import userRouter from '../routes/user';

const expressLoader = async (app: Application) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/', (_: Request, res: Response) => {
    res.send('welcome to user service!');
  });

  app.use('/api/user', userRouter);
};

export default expressLoader;
