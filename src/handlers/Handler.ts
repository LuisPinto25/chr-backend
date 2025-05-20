import type { User } from '../types/User';

export interface Handler {
  handle: (user: User) => Promise<void>;
}
