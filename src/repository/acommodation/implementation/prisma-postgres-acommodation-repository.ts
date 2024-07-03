import { Accommodation } from "../../../entities/accommodation/Accommodation";
import { AccommodationRepository } from "../acommodation-repository";

class PrismaPostgresAccommodationRepository implements AccommodationRepository {
  private DB: Accommodation[] = [];

  create(accommodation: Accommodation): Promise<Accommodation> {
    this.DB.push(accommodation);
    return Promise.resolve(accommodation);
  }

  update(accommodation: Accommodation): Promise<Accommodation> {
    const index = this.DB.findIndex((a) => a.id === accommodation.id);
    if (index === -1) {
      return Promise.reject(new Error('Accommodation not found'));
    }
    this.DB[index] = accommodation;
    return Promise.resolve(accommodation);
  }

  delete(id: string): Promise<void> {
    const index = this.DB.findIndex((a) => a.id === id);
    if (index === -1) {
      return Promise.reject(new Error('Accommodation not found'));
    }
    this.DB.splice(index, 1);
    return Promise.resolve();
  }

  findById(id: string): Promise<Accommodation> {
    const accommodation = this.DB.find((a) => a.id === id);
    if (!accommodation) {
      return Promise.reject(new Error('Accommodation not found'));
    }
    return Promise.resolve(accommodation);
  }

  findAll(): Promise<Accommodation[]> {
    return Promise.resolve(this.DB);
  }

  findByName(name: string): Promise<Accommodation> {
    const accommodation = this.DB.find((a) => a.name === name);
    if (!accommodation) {
      return Promise.reject(new Error('Accommodation not found'));
    }
    return Promise.resolve(accommodation);
  }
}

export { PrismaPostgresAccommodationRepository };
