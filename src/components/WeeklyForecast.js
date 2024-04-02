import React, { useEffect } from 'react';
import { formatDate } from '../utils/helperFunctions';
import clear_day from '../images/Icons/clear_day.svg';
import cloudy_day from '../images/Icons/cloudy_day.svg';
import rain_day from  '../images/Icons/rain_day.svg';
import fewclouds_day from '../images/Icons/fewclouds_day.svg';
import storm_day from '../images/Icons/storm_day.svg';
import clear_night from '../images/Icons/clear_night.svg';
import cloudy_night from '../images/Icons/cloudy_night.svg';
import rain_night from  '../images/Icons/rain_night.svg';
import fewclouds_night from '../images/Icons/fewclouds_night.svg';
import storm_night from '../images/Icons/storm_night.svg';
function WeeklyForecast({ data }) {

  const forecastDays = data.list.filter((_, index) => index % 8 === 0);
  const iconMapping = {
    //gündüz
    '01d': clear_day, 
    '02d': fewclouds_day, 
    '03d': cloudy_day, 
    '04d': cloudy_day, 
    '10d': rain_day, 
    '11d': storm_day, 
    //gece
    '01n': clear_night, 
    '02n': fewclouds_night, 
    '03n': cloudy_night, 
    '04n': cloudy_night,
    '10n': rain_night, 
    '11n': storm_night, 
  };
  useEffect(() => { 

    //console.log('Weekly forecast data:', forecastDays);
  }, [forecastDays]);
  return (
    <div className="weekly-forecast">
      {forecastDays.map((day) => (
        <div key={day.dt} className="day">
          <span className='forecast_date'>{formatDate(day.dt)}</span>
          <img 
          width={"80vw"}
            src={iconMapping[day.weather[0].icon]} 
            alt="Weather icon"
          />
          <span>{`${Math.round(day.main.temp)}°c`}</span>
          <span className='temp_min'>{`${Math.round(day.main.temp_min)}°c`}</span>
        </div>
      ))}
    </div>
  );
}

export default WeeklyForecast;
