import { User } from "../../entities/user/user";

interface LoginRepository {
  findUser(email: string): Promise<User | null>;
} export { LoginRepository };