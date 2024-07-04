import { EmailTrapMailProvider } from "../../providers/implement/email-trap-mail-provider";
import { PrismaPostgressReservation } from "../../repository/reservation/implement/prisma-postgres-reservation";
import { CreateReservationControllerUseCase } from "./create-reervation-controller-use-case";
import { CreateReservationUseCase } from "./create-reservation-use-case";

const prismaPostgresReservation = new PrismaPostgressReservation();
const emailTrapMailProvider = new EmailTrapMailProvider();

const createReservationUseCase = new CreateReservationUseCase(
  prismaPostgresReservation,
  emailTrapMailProvider,
);

const createReservationControllerUseCase = new CreateReservationControllerUseCase(
  createReservationUseCase
);

export { createReservationControllerUseCase };