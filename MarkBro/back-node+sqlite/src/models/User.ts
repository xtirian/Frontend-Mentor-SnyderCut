import { File } from "./File";

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;

  File?: File[];
}

export class UserModel {
  id: User["id"];
  username: User["username"];
  email: User["email"];
  password: User["password"];
  createdAt?: User["createdAt"];
  updatedAt?: User["updatedAt"];

  File?: User["File"];

  constructor(user: Partial<User>) {
    this.id = user.id ?? '';
    this.username = user.username ?? '';
    this.email = user.email ?? '';
    this.password = user.password ?? ''; 
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.File = user.File;
  }

  hidePassword() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  publicInfo() {
    return {
      id: this.id,
      username: this.username,
      createdAt: this.createdAt,      
    };
  }
}
