import { File } from "../../models/File";
import { User } from "../../models/User";
import FileRepository from "../../repositories/file.repository";
import UserRepository from "../../repositories/user.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";

export class GetFileByUserId {
  private readonly fileRepository = new FileRepository();
  private readonly userRepository = new UserRepository();
  async validate(userId: User["id"]): Promise<File[]> {
    if (!userId) {
      throw ErrorPattern.missingRequired("Missing params");
    }
    const user = await this.userRepository.getById(userId);
    if (!user) throw ErrorPattern.notFound("User not found");
    const files = await this.fileRepository.getByUserId(userId);
    if (files === null) throw ErrorPattern.notFound("Files not found");
    if (files.length) {
      files.forEach((file) => {
        if (file.userId !== userId)
          throw ErrorPattern.forbidden("You are not allowed to get this file");
      });
    }
    return files;
  }
  async execute(userId: User["id"]): Promise<File[]> {
    return await this.validate(userId);
  }
}
