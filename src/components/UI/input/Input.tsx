import React, { FC } from "react";
import useInput from "../../../hooks/useInput";
import { IInput } from "../../../types/UITypes";
import "./input.scss";

const Input: FC<IInput> = ({ placeholder, value, changeValue, ...props }) => {
   return (
      <input
         type="text"
         className="input"
         placeholder={placeholder}
         value={value}
         onChange={changeValue}
         {...props}
      />
   );
};

export default Input;
