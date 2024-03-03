import { server } from "./app";
import next from "next";

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    server.get("*", (req, res) => {
      //res.send('<h1>Hello world</h1>');
      //app.render(req,res,'/')
      return handle(req, res);
    });

    server.post("*", (req, res) => {
      //res.send('<h1>Hello world</h1>');
      //app.render(req,res,'/')
      return handle(req, res);
    });

    server.listen(PORT, () => {
      console.log(`> ${process.env.NODE_ENV} server listening on ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
