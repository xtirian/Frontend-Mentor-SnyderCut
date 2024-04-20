import { File } from "./File";

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;

  File?: File[];
}

export class UserModel {
  id: User["id"];
  username: User["username"];
  email: User["email"];
  password: User["password"];
  created_at?: User["created_at"];
  updated_at?: User["updated_at"];

  File?: User["File"];

  constructor(user: Partial<User>) {
    this.id = user.id ?? '';
    this.username = user.username ?? '';
    this.email = user.email ?? '';
    this.password = user.password ?? ''; 
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
    this.File = user.File;
  }

  hidePassword() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }

  publicInfo() {
    return {
      id: this.id,
      username: this.username,
      created_at: this.created_at,      
    };
  }
}
