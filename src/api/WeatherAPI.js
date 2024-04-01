import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_WEATHER_API_URL;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (city, endpoint) => {
  try {
    const url = `${API_BASE_URL}/${endpoint}`;
    const { data } = await axios.get(url, {
      params: {
        q: city,
        units: 'metric',
        APPID: API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error(`Weather API error on ${endpoint}:`, error);
    throw error;
  }
};
