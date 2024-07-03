import { Accommodation } from "../../entities/accommodation/Accommodation";
import { IAccommodation } from "../../entities/entitiesDTO";
import { PrismaPostgresAccommodationRepository } from "../../repository/acommodation/implementation/prisma-postgres-acommodation-repository";

class CreateAccommodationUseCase {
  constructor(
    private prismaProsgresAccommodationRepository: PrismaPostgresAccommodationRepository
  ) { }

  async execute(data: IAccommodation) {
    const accommodationAlreadyExist = await this.prismaProsgresAccommodationRepository.findByName(data.name);

    if (accommodationAlreadyExist) {
      throw new Error("Accommodation already exist");
    }

    const newAccommodation = new Accommodation(data);

    await this.prismaProsgresAccommodationRepository.create(newAccommodation);

    return newAccommodation
  }

} export { CreateAccommodationUseCase };