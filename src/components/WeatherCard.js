import React from "react";

import WeeklyForecast from "./WeeklyForecast";
import WeatherDetail from "./WeatherDetail";

import WeatherHeader from "./WeatherHeader";
const WeatherCard = ({ city, removeCity }) => {

  const data = city.weather;
 
 
  return (
    <div className="weather-card">
      
      <WeatherHeader city={city} data={data} removeCity={removeCity} />
      <WeatherDetail data={data} />
      <WeeklyForecast data={city.forecast} />
    </div>
  );
};

export default WeatherCard;
