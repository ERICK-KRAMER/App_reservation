import express, { Request, Response } from "express";
import cors from "cors";
import { createItinerariesController } from "./use-case/itineraries";
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
    this.app.post('/', (request: Request, response: Response) => {
      return createItinerariesController.handle(request, response);
    });
  }

  listen(port?: number) {
    this.app.listen(port || 3000, () => {
      console.log("Server is running on port 3000");
    });
  }

} export { App };