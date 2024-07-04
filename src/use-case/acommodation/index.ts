import { CreateAccommodationUseCaseController } from "./create/create-acommodation-use-case-contoller";
import { CreateAccommodationUseCase } from "./create/create-acommodation-use-case";
import { PrismaPostgresAccommodationRepository } from "../../repository/acommodation/implementation/prisma-postgres-acommodation-repository";
import { FindAllAccommodationUseCase } from "./findAll/find-accommodation-use-case";
import { FindAllAccommodationControllerUseCase } from "./findAll/find-accommodation-controller-use-case";

const prismaPostgresAccommodationRepository = new PrismaPostgresAccommodationRepository();

//  CRIAÇAO DE ACCOMMODATION;
const createAcommodationUseCase = new CreateAccommodationUseCase(
  prismaPostgresAccommodationRepository
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