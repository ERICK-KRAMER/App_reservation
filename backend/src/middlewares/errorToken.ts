import { Request, Response, NextFunction } from "express";
import { Token } from "../providers/JWT/implement/JWT-repository-middleware";

class TokenController {

  handler(request: Request, response: Response, next: NextFunction) {
    try {
      const token = new Token;

      const tokenExist = request.headers.authorization;

      if (!tokenExist) {
        return response.status(401).json({ message: "Token não encontrado" });
      };

      const tokenValid = token.verifyToken(tokenExist);

      if (!tokenValid) {
        return response.status(401).json({ message: "Token inválido" });
      };

      return next();

    } catch (error) {
      if (error instanceof Error) {
        return response.json(error.message);
      } else {
        return response.json({ message: "Nao foi possivel localizar o token de acesso!" });
      }
    }
  };

} export { TokenController };