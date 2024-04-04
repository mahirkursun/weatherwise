import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_WEATHER_API_URL;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeatherByCoords = async (latitude, longitude) => {
  try {
    const url = `${API_BASE_URL}/weather`;
    const { data } = await axios.get(url, {
      params: {
        lat: latitude,
        lon: longitude,
        units: "metric",
        APPID: API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching weather by coords:", error);

    if (error.response) {
      if (error.response.status === 404) {
        alert("Location not found.");
      } else if (error.response.status === 429) {
        alert("You have exceeded your API request limit.");
      }
    } else if (error.request) {
      alert("No response received from the server.");
    }
    throw error;
  }
};
