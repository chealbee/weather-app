import React, { FC } from "react";
import "./airIndex.scss";

const AirIndex: FC = () => {
   return (
      <div className="air-card">
         <div className="air-card__rigth">
            <div className="air-card__head">
               <h2 className="air-card__title">
                  air index: <span>1</span>
               </h2>
               <p className="air-card__capture">air is good</p>
            </div>

            <div className="air-card__text">
               The lower the index, the better.
            </div>
         </div>
         <ul className="air-card__side">
            <li>
               co: <span>123</span>
            </li>
            <li>
               co: <span>123</span>
            </li>
            <li>
               co: <span>123</span>
            </li>
            <li>
               co: <span>123</span>
            </li>
            <li>
               co: <span>123</span>
            </li>
            <li>
               co: <span>123</span>
            </li>
         </ul>
      </div>
   );
};

export default AirIndex;
