import { UserDTO } from "../../use-case/user/userDTO";

interface IUserRepository {
  save(user: UserDTO): Promise<UserDTO>;
  findByEmail(email: string): Promise<UserDTO | null>;
} export { IUserRepository };