import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { prisma } from "../lib/prisma"; // ✅ Usa a instância global

const router = Router();

router.post("/", authMiddleware, async (req: any, res) => {
  try {
    const { title } = req.body;
    const userId = req.userId;

    const newTodo = await prisma.todo.create({
      data: {
        title,
        userId,
      },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(501).json({ error: "Erro ao criar Tarefa" });
  }
});

router.get("/", authMiddleware, async (req: any, res) => {
  const userId = req.userId;

  const todos = await prisma.todo.findMany({
    where: { userId },
  });
  res.json(todos);
});

export default router;
