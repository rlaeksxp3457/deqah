import {app} from "./app";

const { GATEWAY_SERVICE_PORT } = process.env;

app.listen(GATEWAY_SERVICE_PORT, () => {
  console.log(`Auth-Server is running on port ${GATEWAY_SERVICE_PORT}`);
});