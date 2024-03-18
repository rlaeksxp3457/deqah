import { Application } from 'express';
import expressLoader from './expressLoader';
import routesloader from './routesloader';
import { passportLoader } from './passportLoader';
import passport from 'passport';

const Loader = async (app: Application): Promise<void> => {
  await expressLoader(app);

  // await dbloader();

  await passportLoader(passport);

  await routesloader(app);
};

export default Loader;
