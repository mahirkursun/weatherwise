import React, { useState } from "react";
import logo from "../images/logo/marca.svg";
import { fetchCities } from "../api/CitiesAPI";
import loadingIcon from "../images/Icons/loading.svg";
import { getName } from "country-list";

function SearchBar({
  onSearch,
  viewWeather,
  isLoading,
  setIsLoading,
  fetchCurrentLocationWeather,
}) {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (value) => {
    setCity(value);
    if (!value) {
      setSuggestions([]);
      return;
    }

    const cities = await fetchCities(value);
    setSuggestions(cities);
  };

  const handleSelectSuggestion = (suggestion) => {
    setCity(suggestion);
    setSuggestions([]);
    setIsLoading(true);
    onSearch(suggestion);
  };

  return (
    <div className="search-bar">
      <img src={logo} alt="logo" />
      <div className="search-title">
        <h2>
          Welcome to <span>TypeWeather</span>
        </h2>
        <p>Choose a location to see the weather forecast</p>
      </div>
      <div className="input-container">
        <input
          style={isLoading ? { color: "#BEBEBE" } : {}}
          type="text"
          placeholder="Search location"
          value={city}
          onChange={(e) => handleInputChange(e.target.value)}
          autoComplete="off"
        />
        {isLoading && (
          <img src={loadingIcon} alt="Loading..." className="loading-icon" />
        )}
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelectSuggestion(suggestion.split(",")[0])}
              >
                {suggestion.split(", ")[0]},{" "}
                {getName(suggestion.split(", ")[1])}
              </li>
            ))}
          </ul>
        )}
        <div className="view-weather-btn">
          <button onClick={fetchCurrentLocationWeather}>
            Use Current Location
          </button>
          <button onClick={viewWeather}>View Weather</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
