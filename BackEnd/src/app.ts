import express, { application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { routes } from './routes';

export class App {
  public express: express.Application

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    const corsOptions = {
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200
    }

    this.express.use(express.json())
    this.express.use(bodyParser.urlencoded())
    this.express.use(cors(corsOptions));
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;


