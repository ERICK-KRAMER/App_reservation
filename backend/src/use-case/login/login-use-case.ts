import { JsonWebtokenRepository } from "../../providers/JWT/JWT-repository";
import { LoginRepository } from "../../repository/login/login-repository";
import { compare } from "bcryptjs";
import { LoginDTO } from "./loginDTO";

class LoginUseCase {

  constructor(
    private readonly loginRepository: LoginRepository,
    private readonly TokenProvider: JsonWebtokenRepository,
  ) { };

  async execute(data: LoginDTO) {
    const { email, password } = data;

    const userAlreadyExist = await this.loginRepository.findUser(email);

    if (!userAlreadyExist) {
      throw new Error('User or password incorrect');
    };

    const passwordMatch = await compare(password, userAlreadyExist.password);

    if (!passwordMatch) {
      throw new Error('User or password incorrect');
    }

    const newToken = await this.TokenProvider.TokenGeneration({}, process.env.SECRET_KEY as string, {
      subject: userAlreadyExist.name,
      expiresIn: "1d",
    });

    return {
      token: newToken,
    }
  };
} export { LoginUseCase, LoginDTO };