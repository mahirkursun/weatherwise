import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_WEATHER_API_URL;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const fetchCities = async (city) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/find`, {
      params: {
        q: city,
        type: "like",
        sort: "population",
        cnt: 30,
        appid: API_KEY,
      },
    });
    const data = response.data;

    return data.list.map((city) => `${city.name}, ${city.sys.country}`); 
  } catch (error) {
    console.error("Error fetching cities with axios:", error);

    return [];
  }
};

export { fetchCities };
