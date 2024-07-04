import { Accommodation } from "../../../entities/accommodation/Accommodation";
import { PrismaPostgresAccommodationRepository } from "../../../repository/acommodation/implementation/prisma-postgres-acommodation-repository";
import { AccommodationDTO } from "./create-acommodationDTO";

class CreateAccommodationUseCase {
  constructor(
    private prismaProsgresAccommodationRepository: PrismaPostgresAccommodationRepository
  ) { }

  async execute(data: AccommodationDTO) {
    const accommodationAlreadyExist = await this.prismaProsgresAccommodationRepository.findByName(data.name);

    if (accommodationAlreadyExist) {
      throw new Error("Accommodation already exist");
    }

    const newAccommodation = new Accommodation(data);

    await this.prismaProsgresAccommodationRepository.create(newAccommodation);

    return newAccommodation
  }

} export { CreateAccommodationUseCase };