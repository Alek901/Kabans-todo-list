import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => { 
  const { username, password } = req. body;

  try {
    const user = await User.findOne({ where: { username } });
  }

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(400).json({ message: 'Invalid password'});
  }

  // TODO: If the user exists and the password is correct, return a JWT token
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
