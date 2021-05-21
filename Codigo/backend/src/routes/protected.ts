import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';

export const routerProtected = Router();

routerProtected.get('/', authMiddleware, async (req, res) => {
  return res.send({ userid: req.userId, message: 'Usuário autenticado!' })
});