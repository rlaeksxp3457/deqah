import {Application, Request, Response} from "express";

const routesloader = async (app : Application) => {
  app.get("/", (_: Request, res: Response) => {
    res.send("Hello World!!!!!");
  });
}

export default routesloader;