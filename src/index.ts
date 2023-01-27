import express, { Express, Request, Response, NextFunction } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ msg: "server online!" });
});

export { app };
