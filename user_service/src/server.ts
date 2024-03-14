import {app} from "./app";

const {USER_SERVICE_PORT} = process.env;

app.listen(USER_SERVICE_PORT, () => {
  console.log(`User-Service Server is running on port ${USER_SERVICE_PORT}`);
});