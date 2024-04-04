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

    if (error.response) {
      if (error.response.status === 404) {
        alert("City not found.");
      } else if (error.response.status === 429) {
        alert("You have exceeded your API request limit.");
      }
    } else if (error.request) {
      alert("No response received from the server.");
    }

    return [];
  }
};

export { fetchCities };
