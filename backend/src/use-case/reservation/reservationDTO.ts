import { Accommodation } from "../../entities/accommodation/Accommodation";

interface IReservationDTO {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  accommodationId: string;
  created_at: Date;
  updated_at: Date;
  accommodation?: Accommodation;
} export { IReservationDTO };