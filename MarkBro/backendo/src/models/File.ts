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

