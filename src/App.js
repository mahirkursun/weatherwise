import React, { useEffect, useState } from "react";
import { fetchWeather } from "./api/WeatherAPI";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import { useSwipeable } from "react-swipeable";
import "./App.css";
function App() {
  
  const [cities, setCities] = useState(() => {
    const savedCities = localStorage.getItem("cities");
    return savedCities ? JSON.parse(savedCities) : [];
  });

  const [activeCityIndex, setActiveCityIndex] = useState(0);
  const [isSearchPage, setIsSearchPage] = useState(true);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  const handleSearch = async (city) => {
    const existingCity = cities.find(
      (c) => c.name.toLowerCase() === city.toLowerCase()
    );
    if (existingCity) {
      setActiveCityIndex(cities.indexOf(existingCity));
      setIsSearchPage(false);
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
    }
  };

  const nextCity = () => {
    setActiveCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
  };

  const prevCity = () => {
    setActiveCityIndex(
      (prevIndex) => (prevIndex - 1 + cities.length) % cities.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextCity(),
    onSwipedRight: () => prevCity(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const addCityWeather = (newCity) => {
    setCities((prevCities) => [...prevCities, newCity]);
    setActiveCityIndex(cities.length);
    setIsSearchPage(false);
  };

  const removeCity = (cityName) => {
    const cityIndex = cities.findIndex((city) => city.name === cityName);
    const newCities = cities.filter((city) => city.name !== cityName);
    setCities(newCities);
    localStorage.setItem("cities", JSON.stringify(newCities));

    if (newCities.length === 0) {
      setIsSearchPage(true);
    } else if (cityIndex === newCities.length) {
      setActiveCityIndex(cityIndex - 1);
    } else {
      setActiveCityIndex(cityIndex);
    }
  };
  const viewWeather = () => {
    const savedCities = localStorage.getItem("cities");
    if (savedCities) {
      const cities = JSON.parse(savedCities);

      if (cities.length > 0) {
        handleSearch(cities[0].name);
      } else {
        alert("Please add a city first!");
      }
    }
  };
  return (
    <div className="App">
      {isSearchPage ? (
        <SearchBar
          cities={cities}
          onSearch={handleSearch}
          viewWeather={viewWeather}
        />
      ) : (
        <>
          <button
            onClick={() => setIsSearchPage(true)}
            className="search-button"
          >
            Search City
          </button>

          <div className="slider" {...handlers}>
            {cities.map((city, index) => (
              <div
                key={index}
                className={`slide ${index === activeCityIndex ? "active" : ""}`}
                style={{ transform: `translateX(-${activeCityIndex * 100}%)` }}
              >
                <WeatherCard city={city} removeCity={removeCity} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
