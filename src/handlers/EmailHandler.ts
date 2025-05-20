import { FakeDatabase } from '../database/FakeDatabase';
import type { User } from '../types/User';
import { UserHandler } from './UserHandler';

export class EmailHandler extends UserHandler {
  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async handle(user: User): Promise<void> {
    if (!this.emailRegex.test(user.email)) {
      throw new Error('Email no válido (example@email.com)');
    }

    if (FakeDatabase.findUserByEmail(user.email)) {
      throw new Error('email ya registrado');
    }

    await super.handle(user);
  }
}
