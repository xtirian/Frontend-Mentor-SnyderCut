import { FileModel } from "../../models/File";
import FileRepository from "../../repositories/file.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";

export class UpdateFileContent {
  private readonly fileRepository = new FileRepository();
  async validate({
    id,
    fileContent,
    userId,
  }: IServiceAttributes): Promise<FileModel> {
    if (!id || !fileContent || !userId) {
      throw ErrorPattern.missingRequired("Missing params");
    }
    const file = await this.fileRepository.getById(id);
    if (!file) {
      throw ErrorPattern.notFound("File not found");
    }
    if (file.userId !== userId) {
      throw ErrorPattern.unauthorized("Unauthorized");
    }
    const model = new FileModel({
      id,
      fileContent,
    });
    await this.fileRepository.updateContent(model);
    return model;
  }

  async execute({
    id,
    fileContent,
    userId,
  }: IServiceAttributes): Promise<FileModel> {
    const updatedFile = await this.validate({ id, fileContent, userId });
    return updatedFile;
  }
}

interface IServiceAttributes {
  id: FileModel["id"];
  fileContent: FileModel["fileContent"];
  userId: FileModel["userId"];
}
