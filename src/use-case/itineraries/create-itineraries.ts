import { Itinerary } from "../../entities/itineraries";
import { IItinerariesRepository } from "../../repository/initeraries-repository";
import { CreateItinerariesDTO } from "./create-itinerariesDTO";

class CreateItineraries {
  constructor(
    private itinerariesRepository: IItinerariesRepository
  ) { }

  async execute(data: CreateItinerariesDTO) {
    const newItinerary = new Itinerary(data);
    await this.itinerariesRepository.save(newItinerary);
    return newItinerary;
  }
} export { CreateItineraries };

