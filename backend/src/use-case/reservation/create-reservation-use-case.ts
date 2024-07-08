import { Reservation } from "../../entities/reservation/reservation";
import { IEmailProvider, IMessage } from "../../providers/Nodemailer/email-trap-provider";
import { IReservation } from "../../repository/reservation/reservation-repository";

class CreateReservationUseCase {
  constructor(
    private reservationRepository: IReservation,
    private emailTrapMailProvider: IEmailProvider,
  ) { }

  async execute(data: Reservation) {
    const { name } = data;
    const reservationAlreadyExist = await this.reservationRepository.findReservation(name);

    if (reservationAlreadyExist) {
      throw new Error("Reservation already exist");
    }

    const newReservation = await this.reservationRepository.save(data);

    const message: IMessage = {
      from: {
        name: "Reservation System",
        email: newReservation.email,
      },
      to: {
        name: "Reservation System",
        email: "reservation@system.com",
      },
      subject: "Nova reserva",
      body: `Nova reserva ${newReservation.name} foi criada!`,
    };


    const sendEmail = await this.emailTrapMailProvider.sendEmail(message);

    return {
      message: "Created reservation!",
      reservation: newReservation,
      sendEmail
    };

  }

} export { CreateReservationUseCase };