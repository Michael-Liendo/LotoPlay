export interface IUserForLogin {
  email: string;
  password: string;
}

export interface ILoggedInUser {
  token: string;
  user: IUser;
}

export interface IUserForRegister {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}
