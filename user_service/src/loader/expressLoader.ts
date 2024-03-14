import express, {Application} from "express";
import morgan from "morgan";

const expressLoader = async (app : Application) => {
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
}

export default expressLoader;