import { JsonWebtokenRepository, Options, Payload, } from "../JWT-repository";
import JWT, { JwtPayload } from "jsonwebtoken";

class Token implements JsonWebtokenRepository {
  private secretKey = process.env.SECRET_KEY as string;

  async TokenGeneration(payload: Payload, secretOrPrivateKey: string, options: Options): Promise<string> {
    const token = JWT.sign(payload, secretOrPrivateKey, {
      subject: options.subject,
      expiresIn: options.expiresIn,
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
