import axios from 'axios';
// import config from './config/config';
import { Router, Response, Request } from 'express';
import WeatherService from '../../services/weather-service';

export default (app: Router, weatherService: WeatherService) => {
  app.get('/search', async (req: Request, res: Response) => {});

  app.get('/current/city:id', async (req: Request, res: Response) => {});
};
