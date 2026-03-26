import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma"; // ✅ Usa a instância global

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });
    res
      .status(201)
      .json({ message: "Usuário criado com sucesso!", userId: user.id });
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar usuário" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "E-mail ou senha inválidos" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "E-mail ou senha inválidos" });
    }

    const token = jwt.sign({ userId: user.id }, "MINHA_CHAVE_SECRETA", {
      expiresIn: "1d",
    }); //!Token valido por 1dia

    res.json({ token, userId: user.id });
  } catch (error) {
    res.status(401).json({ error: "Erro interno no servidor" });
  }
});

export default router;
