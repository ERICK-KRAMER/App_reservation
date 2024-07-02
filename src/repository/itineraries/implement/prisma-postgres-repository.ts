import { Itinerary } from "../../../entities/itinerary/itineraries";
import { IItinerariesRepository } from "../initeraries-repository";

class PrismaPostGresRepository implements IItinerariesRepository {
  private DB: Itinerary[] = [];

  async save(data: Itinerary): Promise<Itinerary> {
    this.DB.push(data);
    return data;
  }

  async getAll(): Promise<Itinerary[]> {
    return this.DB;
  }
} export { PrismaPostGresRepository };