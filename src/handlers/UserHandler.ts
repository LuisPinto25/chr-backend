import type { User } from '../types/User';
import type { Handler } from './Handler';

export abstract class UserHandler implements Handler {
  protected nextHandler: UserHandler | null = null;

  setNext(handler: UserHandler): UserHandler {
    this.nextHandler = handler;
    return handler;
  }

  async handle(user: User): Promise<void> {
    if (!this.nextHandler) {
      throw new Error('Manjeador no definido correctamente');
    }

    await this.nextHandler.handle(user);
  }
}
