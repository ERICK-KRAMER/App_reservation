import { PrismaPostgressReservation } from "../../repository/reservation/implement/prisma-postgres-reservation";
import { CreateReservationControllerUseCase } from "./create-reervation-controller-use-case";
import { CreateReservationUseCase } from "./create-reservation-use-case";

const prismaPostgresReservation = new PrismaPostgressReservation();

const createReservationUseCase = new CreateReservationUseCase(
  prismaPostgresReservation
);

const createReservationControllerUseCase = new CreateReservationControllerUseCase(
  createReservationUseCase
);

export { createReservationControllerUseCase };