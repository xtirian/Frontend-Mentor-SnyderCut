import { FileModel } from "../../models/File";
import FileRepository from "../../repositories/file.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";

export class UpdateFileContent {
  private readonly fileRepository = new FileRepository();
  async validate({
    id,
    file_content,
    user_id,
  }: IServiceAttributes): Promise<FileModel> {
    if (!id || !file_content || !user_id) {
      throw ErrorPattern.missingRequired("Missing params");
    }
    const file = await this.fileRepository.getById(id);
    if (!file) {
      throw ErrorPattern.notFound("File not found");
    }
    if (file.user_id !== user_id) {
      throw ErrorPattern.unauthorized("Unauthorized");
    }
    const model = new FileModel({
      id,
      file_content,
    });
    await this.fileRepository.updateContent(model);
    return model;
  }

  async execute({
    id,
    file_content,
    user_id,
  }: IServiceAttributes): Promise<FileModel> {
    const updatedFile = await this.validate({ id, file_content, user_id });
    return updatedFile;
  }
}

interface IServiceAttributes {
  id: FileModel["id"];
  file_content: FileModel["file_content"];
  user_id: FileModel["user_id"];
}
