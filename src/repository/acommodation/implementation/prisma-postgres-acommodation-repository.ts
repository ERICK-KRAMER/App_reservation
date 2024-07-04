import { Accommodation } from "../../../entities/accommodation/Accommodation";
import { AccommodationRepository } from "../acommodation-repository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PrismaPostgresAccommodationRepository implements AccommodationRepository {
  async create(accommodation: Accommodation): Promise<Accommodation> {
    const { name, price, address, description, images, email } = accommodation;
    const createdAccommodation = await prisma.accommodation.create({
      data: {
        name,
        address,
        description,
        price,
        email,
        created_at: new Date(),
        updated_at: new Date(),
        images: {
          create: images.map((image) => ({ url: image.url })),
        },
      },
      include: {
        images: true,
      },
    });
    return createdAccommodation;
  }

  async update(accommodation: Accommodation): Promise<Accommodation> {
    const { id, name, price, address, description, images } = accommodation;
    const updatedAccommodation = await prisma.accommodation.update({
      where: {
        id,
      },
      data: {
        name,
        address,
        description,
        price,
        updated_at: new Date(),
        images: {
          deleteMany: {},
          create: images.map((image) => ({ url: image.url })),
        },
      },
      include: {
        images: true,
      },
    });
    return updatedAccommodation;
  }

  async delete(id: string): Promise<void> {
    await prisma.accommodation.delete({
      where: { id },
    });
  }

  async findById(id: string): Promise<Accommodation | null> {
    const accommodation = await prisma.accommodation.findUnique({
      where: { id },
      include: {
        images: true,
      }
    });
    return accommodation;
  }

  async findAll(): Promise<Accommodation[]> {
    const accommodation = await prisma.accommodation.findMany({
      include: {
        images: true,
      }
    });
    return accommodation;
  }

  async findByName(name: string): Promise<Accommodation | null> {
    const findAccommodation = await prisma.accommodation.findFirst({
      where: { name },
      include: {
        images: true,
      }
    });
    return findAccommodation;
  }

} export { PrismaPostgresAccommodationRepository };
