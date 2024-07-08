import { JwtPayload } from "jsonwebtoken";

type Token = string;

export type Payload = string | object;
export interface Options {
  subject: string;
  expiresIn: number | string;
}
interface JsonWebtokenRepository {
  TokenGeneration(payload: Payload, secretOrPrivateKey: string, options: Options): Promise<Token>;
  verifyToken(token: Token, secretOrPublicKey: string): Promise<Token | JwtPayload>;

} export { JsonWebtokenRepository };