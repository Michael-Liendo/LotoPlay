import { Knex } from 'knex';

export class Auth {
  private knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }

  async getUserByEmail(email: string): Promise<string | null> {
    const user = await this.knex('users').where({ email }).first();
    return user;
  }
}
