import { useState, useEffect } from "react";
import { fetchWeather } from "../api/WeatherAPI";

const useCities = () => {
  const [cities, setCities] = useState(() => {
    const savedCities = localStorage.getItem("cities");
    return savedCities ? JSON.parse(savedCities) : [];
  });
  const [activeCityIndex, setActiveCityIndex] = useState(0);
  const [isSearchPage, setIsSearchPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  const handleSearch = async (city) => {
    setIsLoading(true);
    const existingCity = cities.find(
      (c) => c.name.toLowerCase() === city.toLowerCase()
    );
    if (existingCity) {
      setActiveCityIndex(cities.indexOf(existingCity));
      setIsSearchPage(false);
      setIsLoading(false);
      return;
    }
    try {
      const currentWeather = await fetchWeather(city, "weather");
      const forecast = await fetchWeather(city, "forecast");
      const newCity = {
        name: city,
        weather: currentWeather,
        forecast: forecast,
      };
      addCityWeather(newCity);
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("City not found!");
    } finally {
      setIsLoading(false);
    }
  };

  const addCityWeather = (newCity) => {
    setCities((prevCities) => [...prevCities, newCity]);
    setActiveCityIndex(cities.length);
    setIsSearchPage(false);
  };

  const removeCity = (cityName) => {
    const newCities = cities.filter((city) => city.name !== cityName);
    setCities(newCities);
    if (newCities.length === 0) {
      setIsSearchPage(true);
    } else if (activeCityIndex === cities.length - 1) {
      setActiveCityIndex(activeCityIndex - 1);
    } else {
      setActiveCityIndex(activeCityIndex);
    }
  };

  const viewWeather = () => {
    if (cities.length > 0) {
      setIsSearchPage(false);
      setActiveCityIndex(0);
    } else {
      alert("Please add a city first!");
    }
  };

  return {
    cities,
    activeCityIndex,
    isSearchPage,
    isLoading,
    removeCity,
    setActiveCityIndex,
    setIsSearchPage,
    setIsLoading,
    handleSearch,
    viewWeather,
  };
};

export default useCities;
