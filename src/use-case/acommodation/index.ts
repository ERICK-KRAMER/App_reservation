import { CreateAccommodationUseCaseController } from "../acommodation/create-acommodation-use-case-contoller";
import { CreateAccommodationUseCase } from "../acommodation/create-acommodation-use-case";
import { PrismaPostgresAccommodationRepository } from "../../repository/acommodation/implementation/prisma-postgres-acommodation-repository";

const prismaPostgresAccommodationRepository = new PrismaPostgresAccommodationRepository();

const createAcommodationUseCase = new CreateAccommodationUseCase(
  prismaPostgresAccommodationRepository
);

const createAcommodationUseCaseController = new CreateAccommodationUseCaseController(
  createAcommodationUseCase
);


export { createAcommodationUseCaseController };