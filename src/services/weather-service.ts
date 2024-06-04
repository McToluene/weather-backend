import axios from 'axios';
import config from '../config/config';
import { ILocation } from '../interfaces/ILocation';

export default class WeatherService {
  async searchCity(cityName: string): Promise<ILocation[]> {
    try {
      const apiKey = config.OPENWEATHERMAP_API_KEY;
      if (!apiKey) throw new Error('Missing OPENWEATHERMAP_API_KEY environment variable');

      const response = await axios.get<ILocation[]>(
        `${config.API_URL}/onecall?q=${cityName}&appid=${apiKey}`
      );

      if (!response.data) throw new Error('City not found or invalid response');
      return response.data;
    } catch (error) {
      console.error('Error fetching city:', error);
      return [];
    }
  }

  async getWeathers(lat: number, lon: number): Promise<IWeather[]> {
    try {
      const apiKey = config.OPENWEATHERMAP_API_KEY;
      if (!apiKey) throw new Error('Missing OPENWEATHERMAP_API_KEY environment variable');

      const weatherResponse = await axios.get<IWeather[]>(
        `${config.API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );

      if (!weatherResponse.data) throw new Error('Weather not found or invalid response');
      return weatherResponse.data;
    } catch (error) {
      console.error('Error fetching weather:', error);
      return [];
    }
  }

  async getWeather(lat: number, lon: number): Promise<IWeather[]> {
    try {
      const apiKey = config.OPENWEATHERMAP_API_KEY;
      if (!apiKey) throw new Error('Missing OPENWEATHERMAP_API_KEY environment variable');

      const weatherResponse = await axios.get<IWeather[]>(
        `${config.API_URL}/onecall?lat=${lat}&lon=${lon}&date=${Date.now}&appid=${apiKey}`
      );

      if (!weatherResponse.data) throw new Error('Weather not found or invalid response');
      return weatherResponse.data;
    } catch (error) {
      console.error('Error fetching weather:', error);
      return [];
    }
  }
}
