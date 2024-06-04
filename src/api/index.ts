import { Router } from 'express';

import weather from './routes/weather';
import WeatherService from '../services/weather-service';

export default (weatherService: WeatherService) => {
  const app = Router();
  weather(app, weatherService);
  return app;
};
