import React, { FC } from "react";
import { IButon } from "../../../types/UITypes";
import "./button.scss";
import searchIcon from "../../../img/search.svg";

const Button: FC<IButon> = ({ text, type, ...props }) => {
   if (type === "search") {
      return (
         <button className="button" {...props}>
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
