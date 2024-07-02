import { PrismaPostGresRepository } from "../../repository/implement/prisma-postgres-repository";
import { CreateItineraries } from "./create-itineraries";
import { CreateItinerariesController } from "./create-itineraries-controller";

const prismaPostGresRepository = new PrismaPostGresRepository();

const createItineraries = new CreateItineraries(
  prismaPostGresRepository,
);

const createItinerariesController = new CreateItinerariesController(
  createItineraries,
);

export { createItinerariesController };