import type { User } from '../types/User';

export class FakeDatabase {
  private static users: User[] = [];

  static findUserByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  static addUser(user: User): void {
    this.users.push(user);
  }

  static getAllUsers(): User[] {
    return this.users;
  }
}
