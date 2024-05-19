import { File, FileModel } from "../models/File";
import { v4 as uuidv4 } from "uuid";
import { ErrorPattern } from "../services/ErroPattern.service";
import conn from "../database/conn";

export default class FileRepository {
  async create(file: FileModel): Promise<File | null> {
    try {
      const result = await conn.file.create({
        data: {
          id: uuidv4(),
          fileName: file.fileName,
          fileContent: file.fileContent,
          user: { connect: { id: file.userId } },
        },
      });
      return result;
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error creating file:${err}`);
    }
  }

  async getByUserId(userId: string): Promise<File[] | null> {
    try {
      const files = await conn.file.findMany({
        where: {
          userId: userId,
        },
        orderBy: {
          updatedAt: "desc",
          createdAt: "desc",
        },
        take: 10,
      });
      return files.length > 0 ? files : null;
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error getting all files: ${err}`);
    }
  }

  async getById(id: string): Promise<File | null> {
    try {
      const file = await conn.file.findUnique({
        where: {
          id: id,
        },
      });
      return file ? file : null;
    } catch (err) {
      throw ErrorPattern.internalServerError(
        `Error getting file by id: ${err}`
      );
    }
  }

  async updateName(file: FileModel): Promise<File | null> {
    try {
      const updatedFile = await conn.file.update({
        where: {
          id: file.id,
        },
        data: {
          fileName: file.fileName,
        },
      });
      return updatedFile;
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error updating file: ${err}`);
    }
  }

  async updateContent(file: FileModel): Promise<File | null> {
    try {
      const updatedFile = await conn.file.update({
        where: {
          id: file.id,
        },
        data: {
          fileContent: file.fileContent,
        },
      });
      return updatedFile;
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error updating file: ${err}`);
    }
  }

  async delete(id: File["id"]): Promise<void> {
    try {
      await conn.file.delete({ where: { id } });
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error deleting file: ${err}`);
    }
  }
}
