import { CreateAccommodationUseCaseController } from "./create/create-acommodation-use-case-contoller";
import { CreateAccommodationUseCase } from "./create/create-acommodation-use-case";
import { PrismaPostgresAccommodationRepository } from "../../repository/acommodation/implementation/prisma-postgres-acommodation-repository";
import { FindAllAccommodationUseCase } from "./findAll/find-accommodation-use-case";
import { FindAllAccommodationControllerUseCase } from "./findAll/find-accommodation-controller-use-case";
import { EmailTrapMailProvider } from "../../providers/Nodemailer/implement/email-trap-mail-provider";

const prismaPostgresAccommodationRepository = new PrismaPostgresAccommodationRepository();
const emailtrapProvider = new EmailTrapMailProvider();

//  CRIAÇAO DE ACCOMMODATION;
const createAcommodationUseCase = new CreateAccommodationUseCase(
  prismaPostgresAccommodationRepository,
  emailtrapProvider
);

const createAcommodationUseCaseController = new CreateAccommodationUseCaseController(
  createAcommodationUseCase
);

// GET ALL ACCOMMODATION;
const findAccommodationUseCase = new FindAllAccommodationUseCase(
  prismaPostgresAccommodationRepository
);

const findAccommodationControllerUseCase = new FindAllAccommodationControllerUseCase(
  findAccommodationUseCase
);



export { createAcommodationUseCaseController, findAccommodationControllerUseCase };