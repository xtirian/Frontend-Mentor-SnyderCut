import { regexLib } from "../../lib/regex.lib";
import { UserModel } from "../../models/User";
import UserRepository from "../../repositories/user.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";
import bcrypt from "bcrypt";

export class SignUpService {
  private readonly repository = new UserRepository();
  async validate(username: string, email: string, password: string) {
    if (!username || !email || !password) {
      throw ErrorPattern.missingRequired(
        "Username, email, and password are required."
      );
    }
    if(regexLib.email.test(email) === false) throw ErrorPattern.badRequest("Invalid format: Email.");
    if(regexLib.username.test(username) === false) throw ErrorPattern.badRequest("Invalid format: Username.");
    if(regexLib.password.test(password) === false) throw ErrorPattern.badRequest("Invalid format: Password.");
    const emailExist = await this.repository.getByEmail(email);
    if (emailExist !== null) {
      throw ErrorPattern.conflict("Email already in use.");
    }
    const usernameExist = await this.repository.getByUsername(username);

    if (usernameExist !== null) {
      throw ErrorPattern.conflict("Username already in use.");
    }
    var privateKey = process.env.PRIVATE_KEY;
    if (!privateKey)
      throw ErrorPattern.internalServerError("Private key not found");
    if (privateKey) {
      privateKey = privateKey.replace(/\\n/g, "\n");
    }
    var hashedPassword = bcrypt.hashSync(password, 10);
    const model = new UserModel({ username, email, password: hashedPassword });
    this.repository.create(model);
    return { username, email, password: hashedPassword };
  }
  async execute(username: string, email: string, password: string){
    return await this.validate(username, email, password);
  }
}
