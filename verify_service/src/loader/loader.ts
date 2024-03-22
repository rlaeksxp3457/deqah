import { Application } from 'express';
import expressLoader from './expressLoader';
import routesloader from './routesloader';
import { initRedis } from './dbLoader';

const Loader = async (app: Application): Promise<void> => {
  await expressLoader(app);

  await initRedis();

  await routesloader(app);
};

export default Loader;
