import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { TokenController } from "./middlewares/errorToken";
import { createAcommodationUseCaseController, findAccommodationControllerUseCase } from "./use-case/acommodation";
import { createReservationControllerUseCase } from "./use-case/reservation";
import { createUserControllerUseCase } from "./use-case/user";
class App {
  private app = express();
  private readonly token = new TokenController();
  private readonly dotenv = dotenv;

  constructor() {
    this.configs();
    this.routes();
  }

  configs() {
    this.app.use(cors());
    this.dotenv.config();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.get('/', this.token.handler, (request: Request, response: Response) => {
      return response.status(200).send("<h1>Hello World</h1>");
    });

    this.app.post('/accommodation/create', (request: Request, response: Response) => {
      return createAcommodationUseCaseController.handle(request, response);
    });

    this.app.get('/accommodation', (request: Request, response: Response) => {
      return findAccommodationControllerUseCase.handle(request, response);
    });

    this.app.post('/reservation/create', (request: Request, response: Response) => {
      return createReservationControllerUseCase.handler(request, response);
    });

    this.app.post('/user/create', (request: Request, response: Response) => {
      return createUserControllerUseCase.handler(request, response);
    });
  }

  listen(port?: number) {
    this.app.listen(port || 3000, () => {
      console.log("Server is running on port 3000");
    });
  }

} export { App };