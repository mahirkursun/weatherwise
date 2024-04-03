import React, { useState } from "react";
import WeatherIcon from "./WeatherIcons";
import clear_day from "../images/Background/clear_day.svg";
import cloudy_day from "../images/Background/cloudy_day.svg";
import rain_day from "../images/Background/rain_day.svg";
import fewclouds_day from "../images/Background/fewclouds_day.svg";
import storm_day from "../images/Background/storm_day.svg";
import clear_night from "../images/Background/clear_night.svg";
import cloudy_night from "../images/Background/cloudy_night.svg";
import rain_night from "../images/Background/rain_night.svg";
import fewclouds_night from "../images/Background/fewclouds_night.svg";
import storm_night from "../images/Background/storm_night.svg";

const WeatherHeader = ({ city, data, removeCity }) => {
  const [showMenu, setShowMenu] = useState(false);

  const iconMapping = {
    //gündüz
    "01d": clear_day,
    "02d": fewclouds_day,
    "03d": cloudy_day,
    "04d": cloudy_day,
    "10d": rain_day,
    "11d": storm_day,
    //gece
    "01n": clear_night,
    "02n": fewclouds_night,
    "03n": cloudy_night,
    "04n": cloudy_night,
    "10n": rain_night,
    "11n": storm_night,
  };

  const handleRemoveCity = () => {
    removeCity(city.name);
    setShowMenu(false);
  };

  const handleAboutCity = () => {
    const query = `${data.name},${data.sys.country} gezilecek yerler aktiviteler`;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
    setShowMenu(false);
  };

  return (
    <div className="weather-header">
      <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
        &#8942;
      </div>
      {showMenu && (
        <div className="menu">
          <button onClick={handleRemoveCity}>Remove City</button>
          <button onClick={handleAboutCity}>About the City</button>
        </div>
      )}
      <img
        className="weather-background"
        src={iconMapping[data.weather[0].icon]}
        alt="Background"
      />
      <div className="cover-letter">
        <h2>{`${data.name}, ${data.sys.country}`}</h2>
        <p>
          {new Date(data.dt * 1000).toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
      <WeatherIcon data={data} />
      <div className="subtitle">
        <h1>{Math.round(data.main.temp)}°c</h1>
        <p>{`${Math.round(data.main.temp_min)}°c / ${Math.round(
          data.main.temp_max
        )}°c`}</p>
        <p>{data.weather[0].description}</p>
      </div>
    </div>
  );
};

export default WeatherHeader;
