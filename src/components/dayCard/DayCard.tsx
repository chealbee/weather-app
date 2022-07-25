import { FC } from "react";

import { useAppSelector } from "../../hooks/typedReduxHooks";
import wezericon from "../../img/cloud-rain.png";
import "./dayCard.scss";
const DayCard: FC = () => {
   const weather = useAppSelector(state => state.weatherData.data);

   return (
      <div className="weather-card">
         <div className="heding-Card">
            <img
               src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
               alt="weather-icon"
            />
            <div className="heding-Card__text">
               <h1 className="weather-card__title">
                  weather in <span>{weather.name}</span>
               </h1>
               <h4 className="weather-card__article">
                  lat: <span>{weather.coord.lat}</span> / lon:{" "}
                  <span>{weather.coord.lon}</span>
               </h4>
            </div>
         </div>
         <div className="weather-card__bottom">
            <div className="weather-card__more-info">
               <p>
                  <span>pressure:</span> {weather.pressure}
               </p>
               <p>
                  <span>humidity:</span> {weather.humidity}
               </p>
               <p>
                  <span>wind speed:</span> {weather.windSpeed.toFixed(2)}km/h
               </p>
            </div>
            <div className="weather-card__temprite">
               <p className="temprite">{weather.temp.toFixed(1)} c</p>
               <p className="feels">
                  feels like: {weather.feels_like.toFixed(1)}c
               </p>
            </div>
         </div>
      </div>
   );
};

export default DayCard;
