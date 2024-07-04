import { AccommodationRepository } from "../../../repository/acommodation/acommodation-repository";

class FindAllAccommodationUseCase {
  constructor(
    private readonly accommodationRepository: AccommodationRepository,
  ) { };

  async execute() {
    const accommodation = await this.accommodationRepository.findAll();
    if (!accommodation) {
      throw new Error("No accommodation found");
    }
    return accommodation;
  }
} export { FindAllAccommodationUseCase };