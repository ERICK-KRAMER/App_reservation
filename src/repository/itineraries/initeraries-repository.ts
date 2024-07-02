import { Itinerary } from "../../entities/itinerary/itineraries";
export interface IItinerariesRepository {
  save(data: Itinerary): Promise<Itinerary>;
  getAll(): Promise<Itinerary[]>;
};