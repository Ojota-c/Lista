import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3001;
app.use(cors());

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
