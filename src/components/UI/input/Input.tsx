import React, { FC } from "react";
import useInput from "../../../hooks/useInput";
import { IInput } from "../../../types/UITypes";
import "./input.scss";

const Input: FC<IInput> = ({ placeholder, ...props }) => {
   const { value, changeValue } = useInput();

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
