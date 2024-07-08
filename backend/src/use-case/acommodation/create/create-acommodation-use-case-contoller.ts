import { Request, Response } from "express";
import { CreateAccommodationUseCase } from "./create-acommodation-use-case";

class CreateAccommodationUseCaseController {

  constructor(
    private createAccommodationUseCase: CreateAccommodationUseCase,
  ) { }

  async handle(request: Request, response: Response) {
    const data = request.body;
    try {
      const result = await this.createAccommodationUseCase.execute(data);
      return response.status(201).json({
        message: "Acomodação criada com sucesso",
        data: result
      });
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: error.message });
      } else {
        return response.status(400).json({ message: "An unknown error occurred" });
      }
    }
  }
} export { CreateAccommodationUseCaseController };
