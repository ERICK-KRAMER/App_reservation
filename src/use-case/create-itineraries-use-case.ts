import { Itineraries } from "../entities/itineraries";
import { IItinerariesRepository } from "../repository/initeraries-repository";
import { CreateItineraiesUseCaseDTO } from "./create-itineraries-use-caseDTO";

class CreateItineraiesUseCase {
  constructor(
    private readonly itinerariesRepository: IItinerariesRepository,
  ) { };

  async execute(data: CreateItineraiesUseCaseDTO) {
    const initerary = new Itineraries(data);
    await this.itinerariesRepository.save(initerary);
    return initerary;
  }

} export { CreateItineraiesUseCase };