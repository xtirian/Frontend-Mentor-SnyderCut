import { User, UserModel } from "../../models/User";
import UserRepository from "../../repositories/user.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";

export default class GetUserById {
  private readonly repository = new UserRepository();
  async validate(id: User["id"]) {
    if (!id) {
      throw ErrorPattern.missingRequired("User ID is required.");
    }
  
    const user = await this.repository.getById(id);
    if (!user) {
      throw ErrorPattern.notFound("User not found.");
    }

    const model = new UserModel(user).hidePassword();

    return model;
  }

  async execute(id: User["id"]) {
    return await this.validate(id);
  }

}