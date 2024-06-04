import { Application } from 'express';
import WeatherService from '../services/weather-service';

import express from './express';

export default async (app: Application) => {
  const weatherService = new WeatherService();

  express(app, weatherService);
  console.log('Express loaded!');
};
