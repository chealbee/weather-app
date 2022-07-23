import React, { FC } from "react";
import SmoleCard from "../smoleCard/SmoleCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./swiper.scss";
import { Navigation } from "swiper";

import arowImg from "../../img/arow.svg";

const CSwiper: FC = () => {
   return (
      <div className="slider">
         <div className="slider-prev prev">
            <img src={arowImg} alt="arowImg" />
         </div>
         <div className="slider-next next">
            <img src={arowImg} alt="arowImg" />
         </div>
         <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
               prevEl: ".prev",
               nextEl: ".next",
            }}
         >
            <SwiperSlide>
               <SmoleCard />
            </SwiperSlide>
            <SwiperSlide>
               <SmoleCard />
            </SwiperSlide>
            <SwiperSlide>
               <SmoleCard />
            </SwiperSlide>
            <SwiperSlide>
               <SmoleCard />
            </SwiperSlide>
            <SwiperSlide>
               <SmoleCard />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default CSwiper;
