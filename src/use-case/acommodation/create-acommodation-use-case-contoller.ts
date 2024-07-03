import { Request, Response } from "express";
import { CreateAcommodationUseCase } from "./create-acommodation-use-case";

class CreateAcommodationUseCaseController {

  constructor(
    private createAcommodationUseCase: CreateAcommodationUseCase,
  ) { }

  async handle(request: Request, response: Response) {
    const data = request.body;
    try {
      const result = await this.createAcommodationUseCase.execute(data);
      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json({ message: error })
    }
  }
} export { CreateAcommodationUseCaseController };