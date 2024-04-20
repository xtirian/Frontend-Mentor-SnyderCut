import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ErrorPattern } from '../services/ErroPattern.service';
import { UserModel } from '../models/User';

declare module "express-serve-static-core" {
  interface Request {
    user: UserModel;
  }
}
// TODO: TESTAR

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json(ErrorPattern.unauthorized('No token provided'));
  }

  try {
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY || 'secret') as { data: any };
    req.user = decoded.data;
    next();
  } catch (err) {
    return res.status(401).json(ErrorPattern.unauthorized('Invalid token'));
  }
};
