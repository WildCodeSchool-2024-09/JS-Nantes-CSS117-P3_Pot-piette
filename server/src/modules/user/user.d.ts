export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  inscription_date: string;
}

export interface UserUpdateI extends User {
  age: number;
  genre: string;
  picture: string;
  is_admin: boolean;
}
