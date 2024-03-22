import { app } from './app';

const { VERIFY_SERVICE_PORT } = process.env;

app.listen(VERIFY_SERVICE_PORT, () => {
  console.log(`verify-Server is running on port ${VERIFY_SERVICE_PORT}`);
});
