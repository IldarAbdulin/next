export interface IUser {
  id: string;
  name: string;
  username: string;
  website: string;
}
export interface IUserData {
  users: IUser[];
}
export interface IUserDataSingle {
  user: IUser;
}
export type TypeUser = null | { name: string };
