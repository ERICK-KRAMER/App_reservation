import { Request, Response } from "express";
import { CreateReservationUseCase } from "./create-reservation-use-case";

class CreateReservationControllerUseCase {
  constructor(
    private createReservationUseCase: CreateReservationUseCase,
  ) { };

  async handler(request: Request, response: Response) {
    const data = request.body;
    try {
      const result = await this.createReservationUseCase.execute(data);
      return response.status(201).json({
        message: "Reservation created successfully",
        data: result,
      });
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      } else {
        return response.status(500).json({ error: "Internal server error" });
      }
    }
  };

} export { CreateReservationControllerUseCase };