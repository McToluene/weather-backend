import axios from 'axios';
import config from '../config/config';
import { ILocation } from '../interfaces/ILocation';

export default class WeatherService {
  async searchCity(cityName: string): Promise<ILocation[]> {
    try {
      const apiKey = config.OPENWEATHERMAP_API_KEY;
      if (!apiKey) throw new Error('Missing OPENWEATHERMAP_API_KEY environment variable');

      const response = await axios.get<ILocation[]>(
        `${config.GEOLOCATION_URL}?q=${cityName}&appid=${apiKey}`
      );

      if (!response.data) throw new Error('City not found or invalid response');
      return response.data;
    } catch (error) {
      console.error('Error fetching city:', error);
      return [];
    }
  }

  async getWeather(lat: number, lon: number): Promise<IWeatherResponse | null> {
    try {
      const apiKey = config.OPENWEATHERMAP_API_KEY;
      if (!apiKey) throw new Error('Missing OPENWEATHERMAP_API_KEY environment variable');

      const weatherResponse = await axios.get<IWeatherResponse>(
        `${config.API_URL}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );

      if (!weatherResponse.data) throw new Error('Weather not found or invalid response');
      return weatherResponse.data;
    } catch (error) {
      console.error('Error fetching weather:', error);
      return null;
    }
  }

  async forecast(lat: number, lon: number): Promise<IWeatherResponse | null> {
    try {
      const apiKey = config.OPENWEATHERMAP_API_KEY;
      if (!apiKey) throw new Error('Missing OPENWEATHERMAP_API_KEY environment variable');

      const weatherResponse = await axios.get<IWeatherResponse>(
        `${config.API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );

      if (!weatherResponse.data) throw new Error('Weather not found or invalid response');
      return weatherResponse.data;
    } catch (error) {
      console.error('Error fetching weather:', error);
      return null;
    }
  }
}
