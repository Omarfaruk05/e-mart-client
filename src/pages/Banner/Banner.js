import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <div className="">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper md:min-h-[220px]"
            >
                <SwiperSlide><img  src="https://placeimg.com/800/200/arch" alt="" className="w-full" /></SwiperSlide>
                <SwiperSlide> <img src="https://placeimg.com/800/200/arch" alt="" className="w-full" /></SwiperSlide>
                <SwiperSlide> <img src="https://placeimg.com/800/200/arch" alt="" className="w-full" /></SwiperSlide>
                <SwiperSlide> <img src="https://placeimg.com/800/200/arch" alt="" className="w-full" /></SwiperSlide>
                <SwiperSlide> <img src="https://placeimg.com/800/200/arch" alt="" className="w-full" /></SwiperSlide>
                <SwiperSlide> <img src="https://placeimg.com/800/200/arch" alt="" className="w-full" /></SwiperSlide>
                <SwiperSlide> <img src="https://placeimg.com/800/200/arch" alt="" className="w-full" /></SwiperSlide>
                <SwiperSlide> <img src="https://placeimg.com/800/200/arch" alt="" className="w-full" /></SwiperSlide>
                <SwiperSlide> <img src="https://placeimg.com/800/200/arch" alt="" className="w-full" /></SwiperSlide>
            </Swiper>
        </div>
  );
};

export default Banner;