import { User, UserModel } from "../../models/User";
import UserRepository from "../../repositories/user.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";

export default class GetUserByEmail {
  private readonly repository = new UserRepository();
  
  async validate(email: User["email"]) {
    if (!email) {
      throw ErrorPattern.missingRequired("Email is required.");
    }
  
    const user = await this.repository.getByEmail(email);
    if (!user) {
      throw ErrorPattern.notFound("User not found.");
    }

    const model = new UserModel(user).hidePassword();

    return model;
  }

  async execute(email: User["email"]) {
    return await this.validate(email);
  }
}

