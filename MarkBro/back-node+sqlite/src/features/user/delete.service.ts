import { User } from "../../models/User";
import UserRepository from "../../repositories/user.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";

export class deleteUser {
  private readonly repository = new UserRepository();
  async validate(id: User["id"]) {
    if (!id) {
      throw ErrorPattern.missingRequired("Id is required.");
    }
    const user = await this.repository.getById(id);
    if (user === null) throw ErrorPattern.notFound("User not found.");
  }

  async execute(id: User["id"]) {
    await this.validate(id);
    return await this.repository.delete(id);
  }
}
