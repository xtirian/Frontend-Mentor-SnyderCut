import pool from "../database/db";
import { File, FileModel } from "../models/File";
import { v4 as uuidv4 } from "uuid";
import { ErrorPattern } from "../services/ErroPattern.service";

export default class FileRepository {
  async create(file: File): Promise<File | null> {
    const client = await pool.connect();
    try {
      const id = uuidv4();
      const result = await client.query<File>(
        "INSERT INTO files (id, file_name, file_content) VALUES ($1, $2, $3) RETURNING *",
        [id, file.file_name, file.file_content]
      );
      return result.rows[0];
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error creating file:${err}`);
    } finally {
      client.release();
    }
  }

  async getByUserId(userId: string): Promise<File[] | null> {

    const client = await pool.connect();
    try {
      const result = await client.query<File>(
        "SELECT * FROM files WHERE user_id = $1 ORDER BY GREATEST(updated_at, created_at) DESC LIMIT 10",
        [userId]
      );
      return result.rows.length > 0 ? result.rows : null;
      ; 
    }catch(err){
      throw ErrorPattern.internalServerError(`Error getting all files: ${err}`);
    } finally {
      client.release();
    }
  }

  async getById(id: string): Promise<File | null> {
    const client = await pool.connect();
    try {
      const result = await client.query<File>(
        "SELECT * FROM files WHERE id = $1",
        [id]
      );
      return result.rows.length > 0 ? result.rows[0] : null;      
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error getting file by id: ${err}`);      
    } finally{
      client.release();
    }

  }

  async updateName(file: FileModel): Promise<File | null> {
    const client = await pool.connect();
    try {
      const result = await client.query<File>(
        "UPDATE files SET file_name = $1 WHERE id = $2 RETURNING *",
        [file.file_name, file.id]
      );
      return result.rows[0];
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error updating file: ${err}`);
    } finally {
      client.release();
    }
  }

  async updateContent(file: FileModel): Promise<File | null> {
    const client = await pool.connect();
    try {
      const result = await client.query<File>(
        "UPDATE files SET file_content = $1 WHERE id = $2 RETURNING *",
        [file.file_content, file.id]
      );
      return result.rows[0];
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error updating file: ${err}`);
    } finally {
      client.release();
    }
  }

  async delete(id: File['id']): Promise<void> {
    const client = await pool.connect();
    try {
      await client.query<File>("DELETE FROM files WHERE id = $1", [id]);
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error deleting file: ${err}`);
    } finally {
      client.release();
    }
  }
}