import { Application } from 'express';
import expressLoader from './expressLoader';
// import routesloader from './routesloader';

const Loader = async (app: Application): Promise<void> => {
  await expressLoader(app);

  // await routesloader(app);
};

export default Loader;
