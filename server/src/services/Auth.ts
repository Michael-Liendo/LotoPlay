import { IUserForLogin, IUserForRegister } from '$lib/shared/interfaces';

export default class Auth {
  static async login(data: IUserForLogin) {
    //  todo: implement login
  }

  static async register(data: IUserForRegister) {}
}
