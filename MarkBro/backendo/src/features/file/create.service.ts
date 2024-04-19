import { File, FileModel } from "../../models/File";
import FileRepository from "../../repositories/file.repository";
import UserRepository from "../../repositories/user.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";

export class CreateFile {
  private readonly fileRepository = new FileRepository();
  private readonly userRepository = new UserRepository();
  async validate({
    file_name,
    file_content,
    user_id,
  }: IServiceAttributes): Promise<File> {
    if (!file_name || !file_content) {
      throw ErrorPattern.missingRequired("Missing params");
    }
    const user = await this.userRepository.getById(user_id);
    if (!user) throw ErrorPattern.notFound("User not found");
    const contentScriptFilter = file_content.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      ""
    );
    const model = new FileModel({
      file_name,
      file_content: contentScriptFilter,
      user_id,
    });

    const file = await this.fileRepository.create(model);
    if (!file) throw ErrorPattern.internalServerError("Error creating file");
    return file;
  }
  async execute({
    file_name,
    file_content,
    user_id,
  }: IServiceAttributes): Promise<File> {
    return await this.validate({ file_name, file_content, user_id } as File);
  }
}

type IServiceAttributes = File;
