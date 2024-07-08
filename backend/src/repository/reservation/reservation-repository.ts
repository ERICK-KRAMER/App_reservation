import { Reservation } from "../../entities/reservation/reservation";
import { IReservationDTO } from "../../use-case/reservation/reservationDTO";

interface IReservation {
  findReservation(name: string): Promise<IReservationDTO | null>;
  save(data: Reservation): Promise<Reservation>;
  cancel(id: string): Promise<void>;
} export { IReservation };