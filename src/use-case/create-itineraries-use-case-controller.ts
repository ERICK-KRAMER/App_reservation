import { Request, Response } from "express";
import { CreateItineraiesUseCase } from "./create-itineraries-use-case";


class CreateItineraiesUseCaseController {
  constructor(
    private createItineraiesUseCase: CreateItineraiesUseCase
  ) { }

  async handler(request: Request, response: Response) {
    const data = request.body;
    try {
      const newItinerary = this.createItineraiesUseCase.execute(data);
      return response.status(201).json(newItinerary);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
} export { CreateItineraiesUseCaseController };