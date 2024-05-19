import { File } from "../../models/File";
import { User } from "../../models/User";
import FileRepository from "../../repositories/file.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";

export class DeleteFileService {
  private fileRepository = new FileRepository();

  async validate(id: string, userId: string): Promise<boolean> {
    const userExists = await this.fileRepository.getByUserId(userId);
    if (!userExists) throw ErrorPattern.notFound("User not found");
    const file = await this.fileRepository.getById(id);
    if (!file) throw ErrorPattern.notFound("File not found");
    if (file.userId !== userId)
      throw ErrorPattern.forbidden("You are not allowed to delete this file");
    await this.fileRepository.delete(id);
    return true;
  }

  async execute(id: File["id"], userId: User["id"]): Promise<boolean> {
    return await this.validate(id, userId);
  }
}
