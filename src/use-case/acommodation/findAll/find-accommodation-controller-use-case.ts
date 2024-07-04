import { Request, Response } from "express";
import { FindAllAccommodationUseCase } from "./find-accommodation-use-case";

class FindAllAccommodationControllerUseCase {
  constructor(
    private findAccommodationUseCase: FindAllAccommodationUseCase
  ) { };

  async handle(request: Request, response: Response) {
    try {
      const accommodation = await this.findAccommodationUseCase.execute();
      return response.status(200).json(accommodation);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      } else {
        return response.status(500).json({ error: "Internal server error" });
      }
    }
  }

} export { FindAllAccommodationControllerUseCase };