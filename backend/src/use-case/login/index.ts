import { Token } from "../../providers/JWT/implement/JWT-repository-middleware";
import { PrismaLogin } from "../../repository/login/implement/prisma-login";
import { LoginControllerUseCase } from "./login-controller-use-case";
import { LoginUseCase } from "./login-use-case";

const loginRepository = new PrismaLogin();
const jsonWebTokenRepository = new Token;

const loginUseCase = new LoginUseCase(
  loginRepository,
  jsonWebTokenRepository
);

const loginControllerUseCase = new LoginControllerUseCase(
  loginUseCase
);

export { loginControllerUseCase };