import { Accommodation } from "../../../entities/accommodation/Accommodation";
import { IEmailProvider, IMessage } from "../../../providers/Nodemailer/email-trap-provider";
import { PrismaPostgresAccommodationRepository } from "../../../repository/acommodation/implementation/prisma-postgres-acommodation-repository";
import { AccommodationDTO } from "./create-acommodationDTO";

class CreateAccommodationUseCase {
  constructor(
    private prismaProsgresAccommodationRepository: PrismaPostgresAccommodationRepository,
    private emailProvider: IEmailProvider,
  ) { }

  async execute(data: AccommodationDTO) {
    const accommodationAlreadyExist = await this.prismaProsgresAccommodationRepository.findByName(data.name);

    if (accommodationAlreadyExist) {
      throw new Error("Accommodation already exist");
    }

    const newAccommodation = new Accommodation(data);

    await this.prismaProsgresAccommodationRepository.create(newAccommodation);

    const message: IMessage = {
      to: {
        name: "João",
        email: "joao@email.com",
      },
      from: {
        name: "Teste",
        email: data.email,
      },
      subject: "Teste de email",
      body: "<h1>Sua Hospedagem foi introduzida no nosso catálogo</h1>",
    };

    const emailTrap = await this.emailProvider.sendEmail(message);

    return {
      newAccommodation,
      sendEmail: emailTrap
    }
  }

} export { CreateAccommodationUseCase };