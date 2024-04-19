import { User } from "./User";

export interface File {
  id: string;
  file_name: string;
  file_content: string;  
  created_at?: Date;
  updated_at?: Date;

  user_id: string;
  User: User
}

export class FileModel{
  id: File['id'];
  file_name: File['file_name'];
  file_content: File['file_content'];  
  created_at?: Date;
  updated_at?: Date;

  user_id: File['user_id'];

  constructor({id, file_name, file_content, created_at, updated_at, user_id}: Partial<File>){
    this.id = id || '';
    this.file_name = file_name || '';
    this.file_content = file_content || '';
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.user_id = user_id || '';
  }
}