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
            navigation={{
               prevEl: ".prev",
               nextEl: ".next",
            }}
            breakpoints={{
               0: { slidesPerView: 1.05, spaceBetween: 10 },
               350: { slidesPerView: 1.1, spaceBetween: 10 },
               400: { slidesPerView: 1.5, spaceBetween: 10 },
               450: { slidesPerView: 1.7, spaceBetween: 10 },
               510: { slidesPerView: 2, spaceBetween: 20 },
               540: { slidesPerView: 2.2, spaceBetween: 20 },
               580: { slidesPerView: 2.4, spaceBetween: 20 },
               650: { slidesPerView: 2.7, spaceBetween: 20 },
               720: { slidesPerView: 3, spaceBetween: 30 },
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
