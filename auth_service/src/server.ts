import { app } from './app';

const { AUTH_SERVICE_PORT } = process.env;

app.listen(AUTH_SERVICE_PORT, () => {
  console.log(`Auth-Server is running on port ${AUTH_SERVICE_PORT}`);
});
