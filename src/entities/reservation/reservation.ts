import { Accommodation } from "../accommodation/Accommodation";

class Reservation {
  public id?: string;
  public name: string;
  public accommodation: Accommodation;
  public startDate: Date;
  public endDate: Date;
  public email: string;
  constructor(data: Reservation) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.accommodation = data.accommodation;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
  };
} export { Reservation };