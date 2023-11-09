import { User } from "../repository/User";

import type { IUserForLogin, IUserForRegister } from "$lib/shared/interfaces";

export default class Auth {
	static async login(data: IUserForLogin) {
		//  todo: implement login
	}

	static async register(data: IUserForRegister) {
		const { first_name, last_name, email, password } = data;
	}
}
