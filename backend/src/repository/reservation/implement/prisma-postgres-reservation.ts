import { Reservation } from "../../../entities/reservation/reservation";
import { IReservation } from "../reservation-repository";
import { IReservationDTO } from "../../../use-case/reservation/reservationDTO";
import { prisma } from "../../../prisma/prismaClient";

class PrismaPostgressReservation implements IReservation {
  async save(data: Reservation): Promise<Reservation> {
    const { accommodation, startDate, endDate, user } = data;

    if (!accommodation || !accommodation.id) {
      throw new Error("Accommodation not found or invalid");
    }

    if (!user || !user.id) {
      throw new Error("User not found or invalid");
    }

    const existingReservation = await prisma.reservation.findFirst({
      where: {
        accommodationId: accommodation.id,
        AND: [
          {
            startDate: { lt: endDate }
          },
          {
            endDate: { gt: startDate }
          }
        ]
      }
    });

    if (existingReservation) {
      throw new Error(`Não é possível fazer a reserva. O período de ${startDate} a ${endDate} já está ocupado.`);
    }

    // Criar a nova reserva
    await prisma.reservation.create({
      data: {
        name: data.name,
        startDate: data.startDate,
        endDate: data.endDate,
        accommodation: {
          connect: { id: accommodation.id }
        },
        User: {
          connect: { id: user.id }
        }
      },
      include: { accommodation: true }
    });

    return data;
  }

  async cancel(id: string): Promise<void> {
    await prisma.reservation.delete({
      where: { id },
    });
  }

  async findReservation(name: string): Promise<IReservationDTO | null> {
    const reservation = await prisma.reservation.findFirst({
      where: { name },
      include: { accommodation: true }
    });
    if (!reservation) {
      return null;
    }
    return reservation as unknown as IReservationDTO;
  }
}

export { PrismaPostgressReservation };
