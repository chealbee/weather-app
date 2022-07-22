import React, { FC } from "react";
import wezIco from "../../img/cloud-rain.png";
import "./smoleCard.scss";

const SmoleCard: FC = () => {
   return (
      <div className="small-card">
         <div>
            <p className="small-card__title">friday</p>
            <p className="small-card__temprite">24 c</p>
         </div>
         <img src={wezIco} alt="wezer-ico" />
      </div>
   );
};

export default SmoleCard;
