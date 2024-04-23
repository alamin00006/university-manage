import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema } from "mongoose";

const app: Application = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  // res.send("Hello World!");

  interface IUser {
    name: string;
    email: string;
    avatar?: string;
  }
  // 2. Create a Schema corresponding to the document interface.
  const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String,
  });
});

export default app;
