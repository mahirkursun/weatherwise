import { fetchWeatherByCoords } from "../api/LocationAPI";

const useLocationWeather =
  ({ onSuccess, setIsLoading }) =>
  async () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const weatherData = await fetchWeatherByCoords(latitude, longitude);
          onSuccess(weatherData.name);
        } catch (error) {
          console.error("Unable to fetch weather data:", error);
        } finally {
          setIsLoading(false);
        }
      },
      (error) => {
        alert("Geolocation permission denied. Please check your location settings or grant permission.");
        console.error("Geolocation error:", error);
        setIsLoading(false);
      },
      { timeout: 10000 }
    );
  };

export default useLocationWeather;
