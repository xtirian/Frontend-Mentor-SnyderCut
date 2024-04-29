import { File, FileModel } from "../../models/File";
import FileRepository from "../../repositories/file.repository";
import UserRepository from "../../repositories/user.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";

export class CreateFile {
  private readonly fileRepository = new FileRepository();
  private readonly userRepository = new UserRepository();
  async validate({
    fileName,
    fileContent,
    userId,
  }: IServiceAttributes): Promise<File> {
    if (!fileName || !fileContent) {
      throw ErrorPattern.missingRequired("Missing params");
    }
    const user = await this.userRepository.getById(userId);
    if (!user) throw ErrorPattern.notFound("User not found");
    const contentScriptFilter = fileContent.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      ""
    );
    const model = new FileModel({
      fileName,
      fileContent: contentScriptFilter,
      userId,
    });

    const file = await this.fileRepository.create(model);
    if (!file) throw ErrorPattern.internalServerError("Error creating file");
    return file;
  }
  async execute({
    fileName,
    fileContent,
    userId,
  }: IServiceAttributes): Promise<File> {
    return await this.validate({ fileName, fileContent, userId } as File);
  }
}

type IServiceAttributes = {
  fileName: File["fileName"];
  fileContent: File["fileContent"];
  userId: File["userId"];
};
