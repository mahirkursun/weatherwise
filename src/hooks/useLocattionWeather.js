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
        console.error("Geolocation permission denied:", error);
        setIsLoading(false);
      }
    );
  };

export default useLocationWeather;
