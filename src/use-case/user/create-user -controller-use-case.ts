import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user-use-case";

class CreateUserControllerUseCase {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
  ) { };

  async handler(request: Request, response: Response) {
    const data = request.body;
    try {
      const result = await this.createUserUseCase.execute(data);
      return response.status(201).json({
        message: "User created successfully",
        data: result
      });
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      } else {
        return response.status(500).json({ error: "Internal server error" });
      }
    }
  };

} export { CreateUserControllerUseCase };