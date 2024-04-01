import React, { useState } from "react";
import logo from "../images/logo/marca.svg";
function SearchBar({ onSearch, viewWeather }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    onSearch(city);
    setCity("");
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

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="location-btn" type="submit">Search</button>
        <div  className="view-weather-btn">
        <button onClick={viewWeather}>View Weather</button>
      </div>
      </form>
     
    </div>
  );
}

export default SearchBar;
