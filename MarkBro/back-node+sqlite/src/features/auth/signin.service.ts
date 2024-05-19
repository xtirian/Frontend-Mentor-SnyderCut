import { regexLib } from "../../lib/regex.lib";
import UserRepository from "../../repositories/user.repository";
import { ErrorPattern } from "../../services/ErroPattern.service";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export class SignInService {
  private readonly repository = new UserRepository();
  async validate(email: string, password: string) {
    if (!email || !password) {
      throw ErrorPattern.missingRequired(
        "Email and password are required."
      );
    }
    if(regexLib.email.test(email) === false) throw ErrorPattern.badRequest("Invalid format: Email.");    
    const user = await this.repository.getByEmail(email);
    if (user === null) {
      throw ErrorPattern.unauthorized("The e-mail and password don't match.");
    }
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch || user === null) {
      throw ErrorPattern.unauthorized("The e-mail and password don't match.");
    }

    const secret = process.env.PRIVATE_KEY;
    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60), // EXPIRES IN ONE HOUR
      data: {username: user.username, email: user.email, id: user.id}
    }, secret || 'secret');

    return token;
  }
  async execute(email: string, password: string){
    return await this.validate(email, password);
  }
}