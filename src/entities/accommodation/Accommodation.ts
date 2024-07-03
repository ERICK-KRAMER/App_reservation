import { IAccommodation } from "../entitiesDTO";
import { uuid } from "uuidv4";

class Accommodation {
  public id?: string;
  public name: string;
  public address: string;
  public checkInDate: Date;
  public checkOutDate: Date;
  public reservationDetails?: string;

  constructor(data: IAccommodation) {
    this.id = data.id ? data.id : uuid();
    this.name = data.name;
    this.address = data.address;
    this.checkInDate = data.checkInDate;
    this.checkOutDate = data.checkOutDate;
    this.reservationDetails = data.reservationDetails;
  }
} export { Accommodation };