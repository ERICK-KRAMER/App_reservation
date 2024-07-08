import { User } from "../../../entities/user/user";
import { LoginRepository } from "../login-repository";
import { prisma } from "../../../prisma/prismaClient";

class PrismaLogin implements LoginRepository {

  async findUser(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    return user;
  };


} export { PrismaLogin };