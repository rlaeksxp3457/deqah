import { app } from './app';
import * as process from 'process';

const { EXPRESS_SERVER_PORT } = process.env;

app.listen(EXPRESS_SERVER_PORT, () => {
  console.log('server start  asdasd');
});
