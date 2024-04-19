import { User, UserModel } from "../../models/User";
import UserRepository from "../../repositories/user.repository";
import bcrypt from "bcrypt";
import { ErrorPattern } from "../../services/ErroPattern.service";

export class UpdateUserService {
  private readonly repository = new UserRepository();

  async validate({ id, username, email, password }: User) {
    if (!id || !username || !email || !password) {
      throw ErrorPattern.missingRequired(
        "ID, username, email, and password are required."
      );
    }
    // Verifica se o usuário existe
    const user = await this.repository.getById(id);
    if (!user) {
      throw ErrorPattern.notFound("User not found.");
    }
    // Verifica se o email já está em uso por outro usuário
    const emailInUse = await this.repository.getByEmail(email);
    if (emailInUse && emailInUse.id !== id) {
      throw ErrorPattern.conflict("Email is already in use.");
    }
    // Verifica se o username já está em uso por outro usuário
    const usernameInUse = await this.repository.getByUsername(username);
    if (usernameInUse && usernameInUse.id !== id) {
      throw ErrorPattern.conflict("Username is already in use.");
    }
  }

  async execute({ id, username, email, password }: User) {
    await this.validate({ id, username, email, password });

    const hashedPassword = bcrypt.hashSync(password, 10);
    const updatedUser = new UserModel({
      id,
      username,
      email,
      password: hashedPassword,
    });

    return await this.repository.update(id, updatedUser);
  }
}
