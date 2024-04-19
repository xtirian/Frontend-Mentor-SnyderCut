import { FileModel } from "../../models/File";
import FileRepository from "../../repositories/file.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";

export class UpdateFileName{
  private readonly fileRepository = new FileRepository();
  async validate({id, file_name, user_id}: FileModel): Promise<FileModel>{
    if(!id || !file_name || !user_id){
      throw ErrorPattern.missingRequired('Missing params');
    }
    const file = await this.fileRepository.getById(id);
    if(!file){
      throw ErrorPattern.notFound('File not found');
    }
    if(file.user_id !== user_id){
      throw ErrorPattern.unauthorized('Unauthorized');
    }
    const model = new FileModel({
      id,
      file_name
    });
    await this.fileRepository.updateName(model);
    return model;
  }

  async execute(file: FileModel): Promise<FileModel>{
    const updatedFile = await this.validate(file);
    return updatedFile;
  }
}