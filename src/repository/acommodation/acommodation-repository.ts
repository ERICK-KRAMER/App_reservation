import { Accommodation } from "../../entities/accommodation/Accommodation";

export interface AccommodationRepository {
  create(accommodation: Accommodation): Promise<Accommodation>;
  update(accommodation: Accommodation): Promise<Accommodation>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Accommodation>;
  findAll(): Promise<Accommodation[]>;
  findByName(name: string): Promise<Accommodation>;
}