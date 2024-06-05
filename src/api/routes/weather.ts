import { Router, Response, Request } from 'express';
import WeatherService from '../../services/weather-service';

export default (app: Router, weatherService: WeatherService) => {
  const route = Router();
  app.use('/weather', route);

  route.get('/search', async (req: Request, res: Response) => {
    const cityName = req.query.cityName as string;
    if (!cityName) return res.status(400).send('cityName is required');

    const cities = await weatherService.searchCity(cityName);
    return res.status(200).json(cities);
  });

  route.get('/current', async (req: Request, res: Response) => {
    const lat: number = parseFloat(req.query.lat as string);
    const lon: number = parseFloat(req.query.lon as string);

    if (isNaN(lat) || isNaN(lon))
      return res.status(400).send('Valid latitude and longitude are required');

    const weather = await weatherService.getWeather(lat, lon);
    if (weather === null) return res.status(404).json('Weather not found');
    return res.status(200).json(weather);
  });

  route.get('/forecast', async (req: Request, res: Response) => {
    const lat: number = parseFloat(req.query.lat as string);
    const lon: number = parseFloat(req.query.lon as string);

    if (isNaN(lat) || isNaN(lon))
      return res.status(400).send('Valid latitude and longitude are required');

    const forecast = await weatherService.forecast(lat, lon);
    if (forecast === null) res.status(404).json('Forecast not found!');
    return res.status(200).json(forecast);
  });
};
