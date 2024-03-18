import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import memberRouter from '../routes/member';
import passport from 'passport';

const expressLoader = async (app: Application) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(passport.initialize());

  app.get('/', (_: Request, res: Response) => {
    res.send('welcome to auth service!');
  });

  app.use('/api/auth', memberRouter);
};

export default expressLoader;
