import { JsonWebtokenRepository } from "../JWT-repository";
import JWT, { JwtPayload } from "jsonwebtoken";

class Token implements JsonWebtokenRepository {
  private secretKey = 'b5e3410d-a6a8-4c86-8fe2-53cbe6d96ac3' as string;

  async TokenGeneration(time: string): Promise<string> {
    const token = JWT.sign({}, this.secretKey, {
      expiresIn: time
    });

    return token;
  }

  async verifyToken(token: string): Promise<string | JwtPayload> {
    const [_, validToken] = token.split(' ');

    const verifyToken = JWT.verify(validToken, this.secretKey);

    return verifyToken;
  }
}

export { Token };
