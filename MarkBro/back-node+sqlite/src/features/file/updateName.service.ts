import { FileModel } from "../../models/File";
import FileRepository from "../../repositories/file.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";

export class UpdateFileName {
  private readonly fileRepository = new FileRepository();
  async validate({
    id,
    fileName,
    userId,
  }: IServiceAttributes): Promise<FileModel> {
    if (!id || !fileName || !userId) {
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
      fileName,
    });
    await this.fileRepository.updateName(model);
    return model;
  }

  async execute({
    id,
    fileName,
    userId,
  }: IServiceAttributes): Promise<FileModel> {
    const updatedFile = await this.validate({
      id,
      fileName,
      userId,
    });
    return updatedFile;
  }
}
interface IServiceAttributes {
  id: string;
  fileName: string;
  userId: string;
}
