import { ILoggedInUser, IUserForLogin } from '$lib/shared/interfaces';

export default class Auth {
  static async login(data: IUserForLogin): Promise<ILoggedInUser | Error> {
    try {
      const { email, password } = data;
      // TODO: Implement login logic with repository
      return { token: 'hello', user: { email, password } };
    } catch (error) {
      return error as Error;
    }
  }
}
