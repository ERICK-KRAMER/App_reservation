import { Request, Response } from "express";
import { CreateItineraries } from "./create-itineraries";
import { CreateItinerariesDTO } from "./create-itinerariesDTO";

class CreateItinerariesController {
  constructor(
    private createItineraries: CreateItineraries
  ) { }

  async handle(request: Request, response: Response) {
    const data: CreateItinerariesDTO = request.body;
    try {
      const itineraries = await this.createItineraries.execute(data);
      return response.status(201).json({
        message: "Itineraries created successfully",
        itineraries: itineraries
      });
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
} export { CreateItinerariesController };