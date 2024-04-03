import React from "react";

import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import useCities from "./hooks/useCities";
import useLocationWeather from "./hooks/useLocattionWeather";
import { useSwipeable } from "react-swipeable";
import "./App.css";

function App() {
  const {
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
  } = useCities();

  const handleFetchCurrentLocationWeather = useLocationWeather({
    onSuccess: handleSearch,
    setIsLoading,
  });

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveCityIndex((prevIndex) => (prevIndex + 1) % cities.length),
    onSwipedRight: () =>
      setActiveCityIndex(
        (prevIndex) => (prevIndex - 1 + cities.length) % cities.length
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="App">
      {isSearchPage ? (
        <SearchBar
          onSearch={handleSearch}
          viewWeather={viewWeather}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          fetchCurrentLocationWeather={handleFetchCurrentLocationWeather}
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
