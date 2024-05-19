import { User, UserModel } from "../models/User";
import { v4 as uuidv4 } from "uuid";
import { ErrorPattern } from "../services/ErroPattern.service";
import conn from "../database/conn";

export default class UserRepository {
  async create(user: User): Promise<User | null> {
    try {
      const result = await conn.user.create({
        data: {
          id: uuidv4(),
          username: user.username,
          email: user.email,
          password: user.password,
        },
      });
      return result;
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error creating user:${err}`);
    }
  }

  async getAll(
    page: number,
    take: number
  ): Promise<{ users: User[]; total: number } | null> {
    try {
      const offset = (page - 1) * take;

      const users = await conn.user.findMany({
        skip: offset,
        take: take,
      });

      const total = await conn.user.count();

      return { users, total };
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error getting all users: ${err}`);
    }
  }

  async getByEmail(email: string): Promise<User | null> {
    try {
      const result = await conn.user.findUnique({ where: { email } });
      return result || null;
    } catch (err) {
      throw ErrorPattern.internalServerError(
        `Error getting user by email: ${err}`
      );
    }
  }

  async getById(id: string): Promise<User | null> {
    try {
      const result = await conn.user.findUnique({ where: { id } });
      return result;
    } catch (err) {
      throw ErrorPattern.internalServerError(
        `Error getting user by id: ${err}`
      );
    }
  }

  async update(id: string, user: UserModel): Promise<User | null> {
    try {
      const result = conn.user.update({
        where: { id },
        data: {
          username: user.username,
          email: user.email,
          password: user.password,
        },
      });
      return result;
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error updating user: ${err}`);
    }
  }

  async getByUsername(username: string): Promise<User | null> {
    try {
      const result = conn.user.findUnique({ where: { username } });
      return result;
    } catch (err) {
      throw ErrorPattern.internalServerError(
        `Error checking if user exists: ${err}`
      );
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await conn.user.delete({ where: { id } });
      return true;
    } catch (err) {
      throw ErrorPattern.internalServerError(`Error deleting user: ${err}`);
    }
  }
}
