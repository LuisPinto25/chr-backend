import type { User } from '../types/User';
import { UserHandler } from './UserHandler';

export class PasswordHandler extends UserHandler {
  private passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

  async handle(user: User): Promise<void> {
    if (this.nextHandler) {
      if (!this.passwordRegex.test(user.password)) {
        throw new Error(
          'La contraseña no es válida (Debe tener mínimo 8 caracteres, una letra mayúscula y un caracterer especial)'
        );
      }
      await super.handle(user);
    }
  }
}
