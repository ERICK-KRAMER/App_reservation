import { Request, Response } from "express";
import { z } from "zod";
import { LoginUseCase } from "./login-use-case";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

class LoginControllerUseCase {
  constructor(
    private readonly loginUseCase: LoginUseCase,
  ) { }

  async handler(request: Request, response: Response) {
    const { email, password } = loginSchema.parse(request.body);
    try {
      const singIn = await this.loginUseCase.execute({ email, password });
      return response.status(200).json(singIn);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      } else {
        return response.status(400).json({ error: "Unexpected error" });
      }
    }
  };
} export { LoginControllerUseCase };