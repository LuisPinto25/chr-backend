import type { User } from '../types/User';
import { UserHandler } from './UserHandler';

export class UserIdHandler extends UserHandler {
  private userIdRegex = /^[0-9]{10}$/;

  async handle(user: User): Promise<void> {
    if (!this.userIdRegex.test(user.userId)) {
      throw new Error('La cedula no es valida para el registro');
    }

    await super.handle(user);
  }
}
