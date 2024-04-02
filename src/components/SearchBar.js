import React, { useState } from "react";
import logo from "../images/logo/marca.svg";
import { fetchCities } from "../api/CitiesAPI";

function SearchBar({ onSearch, viewWeather }) {
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
    onSearch(suggestion);
    console.log(suggestions);
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
      <form>
        <input
          type="text"
          placeholder="Search location"
          value={city}
          onChange={(e) => handleInputChange(e.target.value)}
          autoComplete="off"
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelectSuggestion(suggestion.split(",")[0])}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <div className="view-weather-btn">
          <button onClick={viewWeather}>View Weather</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
