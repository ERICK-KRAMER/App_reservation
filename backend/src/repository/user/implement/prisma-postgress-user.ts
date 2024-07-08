import { UserDTO } from "../../../use-case/user/userDTO";
import { IUserRepository } from "../user-repository";
import { prisma } from "../../../prisma/prismaClient";

class PrismaPostgresUserRepository implements IUserRepository {
  async save(user: UserDTO): Promise<UserDTO> {
    const save = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      }
    });
    return save;
  };

  async findByEmail(email: string): Promise<UserDTO | null> {
    const findUser = await prisma.user.findFirst({
      where: { email }
    });
    return findUser;
  };

} export { PrismaPostgresUserRepository };