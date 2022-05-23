export interface IUserCreate {
  name: string;
  password: string;
  age: number;
  email: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
