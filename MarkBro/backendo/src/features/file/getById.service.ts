import { File } from "../../models/File";
import { User } from "../../models/User";
import FileRepository from "../../repositories/file.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";

export class GetFileById{
  private readonly fileRepository = new FileRepository();
  async validate(id: File['id'], user_id: User['id']): Promise<File>{
    if(!id){
      throw ErrorPattern.missingRequired('Missing params');
    }
    const file = await this.fileRepository.getById(id);
    if(!file) throw ErrorPattern.notFound('File not found');
    if(file.user_id !== user_id) throw ErrorPattern.forbidden('You are not allowed to get this file');

    return file;
}
  async execute(id: File['id'], user_id: User['id']): Promise<File>{
    return await this.validate(id, user_id);
  }
}