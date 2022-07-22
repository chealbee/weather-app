import React, { FC } from "react";
import wezericon from "../../img/cloud-rain.png";
import "./dayCard.scss";
const DayCard: FC = () => {
   return (
      <div className="weather-card">
         <div className="heding-Card">
            <img src={wezericon} alt="weather-icon" />
            <div className="heding-Card__text">
               <h1 className="weather-card__title">
                  weather in <span>kyiv</span>
               </h1>
               <h4 className="weather-card__article">
                  timezone: Europe/Warsaw
               </h4>
            </div>
         </div>
         <div className="weather-card__bottom">
            <div className="weather-card__more-info">
               <p>
                  <span>pressure:</span> 13
               </p>
               <p>
                  <span>humidity:</span> 23
               </p>
               <p>
                  <span>wind speed:</span> 18km/h
               </p>
            </div>
            <div className="weather-card__temprite">
               <p className="temprite">24 c</p>
               <p className="feels">feels like: 26 c</p>
            </div>
         </div>
      </div>
   );
};

export default DayCard;
