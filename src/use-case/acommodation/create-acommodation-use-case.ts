import { IAccommodation } from "../../entities/entitiesDTO";
import { AccommodationRepository } from "../../repository/acommodation/acommodation-repository"

class CreateAcommodationUseCase {
  constructor(
    private readonly acommodationRepository: AccommodationRepository,
  ) { }

  async execute(data: IAccommodation) {
    const acommodation = this.acommodationRepository.findByName(data.name);

    if (acommodation) {
      return {
        error: "Acomodação já cadastrada",
        acommodation: acommodation
      }
    }

    const newAcommodation = await this.acommodationRepository.create(data);

    return newAcommodation;
  }
} export { CreateAcommodationUseCase };