import { Accommodation } from "../../../entities/accommodation/Accommodation";
import { AccommodationRepository } from "../acommodation-repository";

class PrismaPostgresAccommodationRepository implements AccommodationRepository {
  private DB: Accommodation[] = [];

  async create(accommodation: Accommodation): Promise<Accommodation> {
    this.DB.push(accommodation);
    return accommodation;
  }

  async update(accommodation: Accommodation): Promise<Accommodation> {
    const index = this.DB.findIndex((a) => a.id === accommodation.id);
    if (index === -1) {
      throw new Error('Accommodation not found');
    }
    this.DB[index] = accommodation;
    return accommodation;
  }

  async delete(id: string): Promise<void> {
    const index = this.DB.findIndex((a) => a.id === id);
    if (index === -1) {
      throw new Error('Accommodation not found');
    }
    this.DB.splice(index, 1);
  }

  async findById(id: string): Promise<Accommodation> {
    const accommodation = this.DB.find((a) => a.id === id);
    if (!accommodation) {
      throw new Error('Accommodation not found');
    }
    return accommodation;
  }

  async findAll(): Promise<Accommodation[]> {
    return this.DB;
  }

  async findByName(name: string): Promise<Accommodation | null> {
    const accommodation = this.DB.find((a) => a.name === name);
    if (!accommodation) {
      return null
    }
    return accommodation;
  }
}

export { PrismaPostgresAccommodationRepository };
