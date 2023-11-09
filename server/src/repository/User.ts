import { IUserForRegister } from '$lib/shared/interfaces';
import { Knex } from 'knex';

export class User {
  private knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }

  async getUserByEmail(email: string): Promise<string | null> {
    const user = await this.knex('users').where({ email }).first();
    return user;
  }

  /**
   *  createUser - creates a user and returns the id
   * @param user IUserForRegister
   * @returns string id
   */
  async createUser(user: IUserForRegister): Promise<string> {
    const [id] = await this.knex('users').insert(user).returning('id');
    return id;
  }
}
