import { User, UserModel } from "../../models/User";
import UserRepository from "../../repositories/user.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";

export class getAllUsers {
  private readonly repository = new UserRepository();
  async validate(page: number, take: number) {
    if (!page || !take) {
      throw ErrorPattern.missingRequired("Page and take are required.");
    }

    if (page < 1 || take < 1) {
      throw ErrorPattern.badRequest("Page and take must be greater than 0.");
    }

    const result = await this.repository.getAll(page, take) as { users: User[]; total: number; } | null;

    if (!result?.users.length || !result?.total ) {
      throw ErrorPattern.notFound("No users found.");
    }

    const models = result?.users.map(user => new UserModel(user).publicInfo());

    return { users: models, total: result.total };
  }

  async execute(page: number, take: number) {
    if (!page) page = 1
    if (!take) take = 20
    return await this.repository.getAll(page, take);
  }
}