import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true }));

// Example: get user by id
app.get('/api/users/:id', async (req, res) => {
  const id = Number(req.params.id);
  const user = await prisma.users.findUnique({ where: { id_users: id } });
  res.json(user);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend running on port ${port}`));
