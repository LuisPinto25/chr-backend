import type { User } from '../types/User';
import { FakeDatabase } from '../database/FakeDatabase';
import {
  EmailHandler,
  PasswordHandler,
  RegisterUserHandler,
  UserIdHandler,
} from '../handlers';

export class UserService {
  async registerUser(user: User) {
    try {
      const registerUserHandler = new RegisterUserHandler();
      const passwordHandler = new PasswordHandler();
      const emailHandler = new EmailHandler();
      const userIdHandler = new UserIdHandler();

      userIdHandler
        .setNext(emailHandler)
        .setNext(passwordHandler)
        .setNext(registerUserHandler);

      await userIdHandler.handle(user);
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      return FakeDatabase.getAllUsers();
    } catch (error) {
      throw error;
    }
  }
}
