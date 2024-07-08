import { EmailTrapMailProvider } from "../../providers/Nodemailer/implement/email-trap-mail-provider";
import { PrismaPostgresUserRepository } from "../../repository/user/implement/prisma-postgress-user";
import { CreateUserControllerUseCase } from "./create-user -controller-use-case";
import { CreateUserUseCase } from "./create-user-use-case";

const prismaPostgresUserRespository = new PrismaPostgresUserRepository();
const emailTrapMailProvider = new EmailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  prismaPostgresUserRespository,
  emailTrapMailProvider,
);

const createUserControllerUseCase = new CreateUserControllerUseCase(
  createUserUseCase
);

export { createUserControllerUseCase };
