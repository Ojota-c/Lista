import dotenv from "dotenv";
import path from "path";

// ✅ DEVE SER PRIMEIRO!
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import express, { Request, Response } from "express";
import cors from "cors";
import authRoutes from "./Routes/auth";
import todoRoutes from "./Routes/todo";

const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World, João Carlos is a great DEV");
});

app.get("/contato", (req: Request, res: Response) => {
  res.json({
    message:
      "Para entrar em contato mande mensagem no email: joaocb202@gmail.com",
  });
});

app.listen(PORT, () => {
  console.log(`O servidor está em http://localhost:${PORT}`);
});
