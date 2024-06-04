import { Application } from 'express';
import WeatherService from '../services/weather-service';

import express from './express';

export default async (app: Application) => {
  // should load a DI here but it's like a overkill for the small app
  const weatherService = new WeatherService();

  express(app, weatherService);
  console.log('Express loaded!');
};
