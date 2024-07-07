import { JwtPayload } from "jsonwebtoken";

type Token = string;

interface JsonWebtokenRepository {
  TokenGeneration(payload: string, secretOrPrivateKey: string, options: string): Promise<Token>;
  verifyToken(token: Token, secretOrPublicKey: string): Promise<Token | JwtPayload>;

} export { JsonWebtokenRepository };