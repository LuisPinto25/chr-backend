import type { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  private userService = new UserService();

  registerUser = async (req: Request, res: Response) => {
    try {
      const { userId, email, password } = req.body;
      await this.userService.registerUser({ userId, email, password });

      res.status(201).send({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
      res.status(400).send({ error: (error as Error).message });
    }
  };

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).send({ users });
    } catch (error) {
      res.status(400).send({ error: (error as Error).message });
    }
  };
}
