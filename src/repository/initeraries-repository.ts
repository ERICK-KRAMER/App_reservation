import { Itineraries } from "../entities/itineraries";

export interface IItinerariesRepository {
  save(data: Itineraries): Promise<Itineraries>;
};