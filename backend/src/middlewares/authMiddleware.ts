import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"; // ✅ CORRETO

export const authMiddleware = (req: any, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: "Token não fornecido" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, "MINHA_CHAVE_SECRETA") as {
      userId: number;
    };

    req.userId = decoded.userId;

    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido" });
  }
};
