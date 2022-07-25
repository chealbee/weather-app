import React, { FC } from "react";
import { IButon } from "../../../types/UITypes";
import "./button.scss";
import searchIcon from "../../../img/search.svg";
import { getWeatherData } from "../../../store/weatherSlice";
import { useAppDispatch } from "../../../hooks/typedReduxHooks";

const Button: FC<IButon> = ({ text, type, ...props }) => {
   const dispatch = useAppDispatch();

   if (type === "search") {
      return (
         <button
            className="button"
            {...props}
            onClick={() => dispatch(getWeatherData())}
         >
            {text} <img src={searchIcon} alt="search image" />
         </button>
      );
   }
   return (
      <button className="button" {...props}>
         {text}
      </button>
   );
};

export default Button;
