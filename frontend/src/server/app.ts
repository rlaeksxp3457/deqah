import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(morgan("dev"));

server.get("/api/example", (_: Request, res: Response) => {
  res.json({ message: "hello world" });
});

export { server };
