import { Reservation } from "../../entities/reservation/reservation";
import { IReservation } from "../../repository/reservation/reservation-repository";

class CreateReservationUseCase {
  constructor(
    private reservationRepository: IReservation,
  ) { }

  async execute(data: Reservation) {
    const { name } = data;
    const reservationAlreadyExist = await this.reservationRepository.findReservation(name);

    if (reservationAlreadyExist) {
      throw new Error("Reservation already exist");
    }

    const newReservation = await this.reservationRepository.save(data);

    return {
      message: "Created reservation!",
      reservation: newReservation,
    };

  }

} export { CreateReservationUseCase };