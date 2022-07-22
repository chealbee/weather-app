import React, { FC, useState } from "react";

const useInput = () => {
   const [value, setvalue] = useState<string>("");
   const changeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setvalue(e.target.value);
   };

   return { value, changeValue };
};

export default useInput;
