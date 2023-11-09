export interface IUserForLogin {
  email: string;
  password: string;
}

export interface ILoggedInUser {
  token: string;
  user: any;
}