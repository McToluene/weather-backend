export default {
  port: parseInt(process.env.PORT ?? '8081', 10),
  API_URL: 'https://api.openweathermap.org/data/3.0',
  OPENWEATHERMAP_API_KEY: '',
  api: {
    prefix: '/api',
  },
};
