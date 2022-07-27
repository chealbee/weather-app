import { FC } from "react";
import { useAppSelector } from "../../hooks/typedReduxHooks";
import "./airIndex.scss";

const AirIndex: FC = () => {
   const airData = useAppSelector(state => state.airIndex);
   return (
      <div className="air-card">
         <div className="air-card__wraper">
            <div className="air-card__rigth">
               <div className="air-card__head">
                  <h2 className="air-card__title">
                     air index: <span>{airData.data.main.aqi}</span>
                  </h2>
                  <p className="air-card__capture">
                     {airData.data.main.aqi <= 2 ? "air is good" : "air is bad"}
                  </p>
               </div>

               <div className="air-card__text">
                  The lower the index, the better.
               </div>
            </div>
            <ul className="air-card__side">
               <li>
                  co:
                  <span> {airData.data.components.co.toFixed(2)}</span>
               </li>
               <li>
                  nh3:
                  <span> {airData.data.components.nh3.toFixed(2)}</span>
               </li>
               <li>
                  no:
                  <span> {airData.data.components.no.toFixed(2)}</span>
               </li>
               <li>
                  no2:
                  <span> {airData.data.components.no2.toFixed(2)}</span>
               </li>
               <li>
                  o3:
                  <span> {airData.data.components.o3.toFixed(2)}</span>
               </li>
               <li>
                  so2:
                  <span> {airData.data.components.so2.toFixed(2)}</span>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default AirIndex;
