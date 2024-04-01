import React from 'react'


import thermal_sensation from '../images/Icons/thermal_sensation.svg';
import wind from '../images/Icons/wind_speed.svg';
import humidity from '../images/Icons/air_humidity.svg';
import  probability  from '../images/Icons/probability_of_rain.svg';

const WeatherDetail = ({data}) => {
  return (
    <div className="weather-details">
        <div className="detail">
          <div className="detail-icon-text">
          <img src={thermal_sensation} alt='Thermal sentation'/>
          <span>Thermal sensation</span>
          </div>
          
          <span>{Math.round(data.main.feels_like)}°C</span>
        </div>
        <div className="detail">
          <div className="detail-icon-text">
          <img src={probability} alt='Probability of rain'/>
      
          <span>Probability of rain</span>
          </div>
          <span>{data.rain ? data.rain["1h"] + "%" : "0%"}</span>
        </div>
        <div className="detail">
          <div className="detail-icon-text">
          <img src={wind} alt='Wind speed'/>
          <span>Wind speed</span>
          </div>
          
          <span>{data.wind.speed} km/h</span>
        </div>
        <div className="detail">
          <div className="detail-icon-text">
          <img src={humidity} alt='Air humidity' />
          <span>Air humidity</span>
          </div>
         
          <span>{data.main.humidity}%</span>
        </div>
      </div>
  )
}

export default WeatherDetail