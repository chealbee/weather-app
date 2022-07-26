import { FC, useEffect, useState } from "react";
import AirIndex from "./components/airIndex/AirIndex";
import DayCard from "./components/dayCard/DayCard";
import Button from "./components/UI/butoon/Button";
import Input from "./components/UI/input/Input";
import logo from "./img/logo.svg";
import bgImage from "./img/coouds.jpg";
import Swiper from "./components/swiper/Swiper";
import { useAppDispatch } from "./hooks/typedReduxHooks";
import { getWeatherData } from "./store/weatherSlice";
import { getAirIndex } from "./store/airIndexSlice";
import useInput from "./hooks/useInput";

const App: FC = () => {
   const dispatch = useAppDispatch();
   const { value, changeValue } = useInput();
   useEffect(() => {
      dispatch(getWeatherData());
      dispatch(getAirIndex());
   }, []);
   const getWeatherIN = () => {
      if (value.trim().length > 2) {
         dispatch(getWeatherData(value));
         dispatch(getAirIndex(value));
      }
   };
   return (
      <>
         <div className="container">
            <div className="logo">
               <img src={logo} alt="logo" />
            </div>
            <div className="search-section">
               <Input
                  placeholder="choose your city..."
                  value={value}
                  changeValue={changeValue}
               />
               <Button
                  text="search"
                  type="search"
                  onClick={() => getWeatherIN()}
               />
            </div>
            <div className="main-section">
               <DayCard />
               <AirIndex />
            </div>
            <div className="slider">
               <Swiper />
            </div>
         </div>
         <img className="body-bg" src={bgImage} alt="bg-image" />
      </>
   );
};

export default App;
