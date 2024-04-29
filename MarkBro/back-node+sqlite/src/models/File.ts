import { User } from "./User";

export interface File {
  id: string;
  fileName: string;
  fileContent: string;  
  createdAt?: Date;
  updatedAt?: Date;

  userId: string;
  User?: User
}

export class FileModel{
  id: File['id'];
  fileName: File['fileName'];
  fileContent: File['fileContent'];  
  createdAt?: Date;
  updatedAt?: Date;

  userId: File['userId'];

  constructor({id, fileName, fileContent, createdAt, updatedAt, userId}: Partial<File>){
    this.id = id || '';
    this.fileName = fileName || '';
    this.fileContent = fileContent || '';
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.userId = userId || '';
  }
}