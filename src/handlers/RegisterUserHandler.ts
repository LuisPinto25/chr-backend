import type { User } from '../types/User';
import { UserHandler } from './UserHandler';
import { FakeDatabase } from '../database/FakeDatabase';

export class RegisterUserHandler extends UserHandler {
  async handle(user: User): Promise<void> {

    const { userId, email, password } = user;
    FakeDatabase.addUser({ userId, email, password });
  }
}
