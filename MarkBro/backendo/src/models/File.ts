import { User } from "./User";

export interface File {
  id: string;
  fileName: string;
  fileContent: string;  
  createdAt?: Date;
  updatedAt?: Date;

  userId: string;
  User: User
}

