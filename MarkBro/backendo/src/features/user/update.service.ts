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
    //verifica senha na confirmação
    const verifyPassword = bcrypt.compareSync(password, user.password);
    if (!verifyPassword) {
      throw ErrorPattern.badRequest("Invalid password.");
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

    const updatedUser = new UserModel({
      id: user.id,
      username: username === user.username ? user.username : username,
      email: email === user.email ? user.email : email,
      password: user.password,
    });

    await this.repository.update(id, updatedUser);

    return updatedUser;
  }

  async execute({ id, username, email, password }: IServiceAttributes) {
    return await this.validate({ id, username, email, password });
  }
}

interface IServiceAttributes {
  id: User["id"];
  username: User["username"];
  email: User["email"];
  password: User["password"];
}
