import { User, UserModel } from "../models/User";
import pool from "../database/db";
import { v4 as uuidv4 } from "uuid";
import { ErrorPattern } from "../services/ErroPattern.service";

export default class UserRepository {
  async create(user: User): Promise<User | null> {
    const client = await pool.connect();
    try {
      const id = uuidv4();
      const result = await client.query(
        "INSERT INTO users (id, username, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
        [id, user.username, user.email, user.password]
      );
      return result.rows[0];
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error creating user:${err}`);
    } finally {
      client.release();
    }
  }

  async getAll(
    page: number,
    take: number
  ): Promise<{ users: User[]; total: number } | null> {
    const client = await pool.connect();
    try {
      const offset = (page - 1) * take;
      const result = await client.query(
        "SELECT (username, created_at) FROM users OFFSET $1 LIMIT $2",
        [offset, take]
      );
      const totalCount = await client.query("SELECT COUNT(*) FROM users");
      const total = parseInt(totalCount.rows[0].count);
      return { users: result.rows, total };
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error getting all users: ${err}`);
    } finally {
      client.release();
    }
  }

  async getByEmail(email: string): Promise<User | null> {
    const client = await pool.connect();
    try {
      const result = await client.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );
      return result.rows[0] || null;
    } catch (err) {
      throw ErrorPattern.internalServerError(
        `Error getting user by email: ${err}`
      );
    } finally {
      client.release();
    }
  }

  async getById(id: string): Promise<User | null> {
    const client = await pool.connect();
    try {
      const result = await client.query("SELECT * FROM users WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    } catch (err) {
      throw ErrorPattern.internalServerError(
        `Error getting user by id: ${err}`
      );
    } finally {
      client.release();
    }
  }

  async update(id: string, user: UserModel): Promise<User | null> {
    const client = await pool.connect();
    try {
      const result = await client.query(
        "UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *",
        [user.username, user.email, user.password, id]
      );
      return result.rows[0];
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error updating user: ${err}`);
    } finally {
      client.release();
    }
  }

  async getByUsername(username: string): Promise<User | null>  {
    const client = await pool.connect();
    try {
      const result = await client.query(
        "SELECT * FROM users WHERE username = $1",
        [username]
      );
      return result.rows[0];
    } catch (err) {
      throw ErrorPattern.internalServerError(
        `Error checking if user exists: ${err}`
      );
    } finally {
      client.release();
    }
  }

  async delete(id: string): Promise<boolean> {
    const client = await pool.connect();
    try {
      await client.query("DELETE FROM users WHERE id = $1", [id]);
      return true;
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error deleting user: ${err}`);
    } finally {
      client.release();
    }
  }
}
