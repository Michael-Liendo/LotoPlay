import { IUser, IUserForRegister } from '$lib/shared/interfaces';
import database from './database';

export class User {
  static async getUserByEmail(email: string): Promise<IUser | null> {
    const user = await database('users').where({ email }).first();
    return user;
  }

  /**
   *  createUser - creates a user and returns the id
   * @param user IUserForRegister
   * @returns string id
   */
  static async createUser(user: IUserForRegister): Promise<string> {
    const [id] = await database('users').insert(user).returning('id');
    return id;
  }
}
