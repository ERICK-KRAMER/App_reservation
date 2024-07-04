import { Reservation } from "../../../entities/reservation/reservation";
import { IReservation } from "../reservation-repository";
import { IReservationDTO } from "../../../use-case/reservation/reservationDTO";
import { prisma } from "../../../prisma/prismaClient";

class PrismaPostgressReservation implements IReservation {
  async save(data: Reservation): Promise<Reservation> {
    const { accommodation, startDate, endDate } = data;

    const existingReservation = await prisma.reservation.findFirst({
      where: {
        accommodationId: accommodation.id,
        OR: [
          {
            AND: [
              { startDate: { lte: startDate } },
              { endDate: { gte: startDate } }
            ]
          },
          {
            AND: [
              { startDate: { lte: endDate } },
              { endDate: { gte: endDate } }
            ]
          },
          {
            AND: [
              { startDate: { gte: startDate } },
              { endDate: { lte: endDate } }
            ]
          }
        ]
      }
    });

    if (existingReservation) {
      throw new Error(`Não é possível fazer a reserva. O período de ${startDate} a ${endDate} já está ocupado.`);
    }

    await prisma.reservation.create({
      data: {
        name: data.name,
        startDate: data.startDate,
        endDate: data.endDate,
        accommodation: {
          connect: { id: accommodation.id }
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
    return reservation as IReservationDTO;
  }
}

export { PrismaPostgressReservation };
