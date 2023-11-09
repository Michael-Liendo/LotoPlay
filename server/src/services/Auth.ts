import { User } from '../repository/User';
import { hashPassword } from '../utils/password';

import type { IUserForLogin, IUserForRegister } from '$lib/shared/interfaces';

export default class Auth {
  // biome-ignore lint/correctness/noUnusedVariables: todo: remove this
  static async login(data: IUserForLogin) {
    //  todo: implement login
  }

  static async register(data: IUserForRegister) {
    const { first_name, last_name, email, password } = data;

    const user = await User.getUserByEmail(email);

    if (user) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hashPassword(password);

    const newUser = {
      first_name,
      last_name,
      email,
      password: hashedPassword,
    };

    const id = await User.createUser(newUser);

    return id;
  }
}