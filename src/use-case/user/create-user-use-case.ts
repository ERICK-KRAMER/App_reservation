import { IEmailProvider, IMessage } from "../../providers/email-trap-provider";
import { EmailTrapMailProvider } from "../../providers/implement/email-trap-mail-provider";
import { IUserRepository } from "../../repository/user/user-repository";
import { UserDTO } from "./userDTO";

class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private readonly emailTrapMailProvider: IEmailProvider,
  ) { };

  async execute(data: UserDTO) {
    const { email } = data;

    const userAlreadyExist = await this.userRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new Error("User already exist");
    }

    const user = await this.userRepository.save(data);

    const message: IMessage = {
      to: {
        name: user.name,
        email: user.email,
      },
      from: {
        name: "Email Trap",
        email: "emailtrap@localhost.com",
      },
      subject: "Welcome to Email Trap",
      body: "Usuario Criado com sucesso!"
    };

    await this.emailTrapMailProvider.sendEmail(message);

    return user;
  };

} export { CreateUserUseCase };