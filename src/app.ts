import cors from "cors";
import express, { Request, Response } from "express";
import { createItinerariesController } from "./use-case/itineraries";
import { createAcommodationUseCaseController, findAccommodationControllerUseCase } from "./use-case/acommodation";
class App {
  private app = express();

  constructor() {
    this.configs();
    this.routes();
  }

  configs() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.post('/itinerary', (request: Request, response: Response) => {
      return createItinerariesController.handle(request, response);
    });

    this.app.post('/accommodation/create', (request: Request, response: Response) => {
      return createAcommodationUseCaseController.handle(request, response);
    });

    this.app.get('/accommodation', (request: Request, response: Response) => {
      return findAccommodationControllerUseCase.handle(request, response);
    });
  }

  listen(port?: number) {
    this.app.listen(port || 3000, () => {
      console.log("Server is running on port 3000");
    });
  }

} export { App };