import React from 'react';
import samsungBrand from "../../assets/brands/samsung.png"
import sonyBrand from "../../assets/brands/sony.png"
import lgBrand from "../../assets/brands/lg.png"
import toshibaBrand from "../../assets/brands/toshiba.png"
import sharpBrand from "../../assets/brands/sharp.png"
import panasonicBrand from "../../assets/brands/panasonic.png"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const AllBrands = () => {
    return (
        <div className='max-w-7xl mx-auto my-4'>
          <h1 className='text-center text-4xl font-bold m'>Our Brands</h1>
          <div className='h-1 w-60 rounded-lg bg-gray-400 mx-auto mb-4'></div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper max-h-40"
      >
        <SwiperSlide><img src={samsungBrand} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sonyBrand} alt="" /></SwiperSlide>
        <SwiperSlide><img src={toshibaBrand} alt="" /></SwiperSlide>
        <SwiperSlide><img src={lgBrand} alt="" /></SwiperSlide>
        <SwiperSlide><img src={panasonicBrand} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sharpBrand} alt="" /></SwiperSlide>
        <SwiperSlide><img src={samsungBrand} alt="" /></SwiperSlide>
        <SwiperSlide><img src={samsungBrand} alt="" /></SwiperSlide>
        <SwiperSlide><img src={samsungBrand} alt="" /></SwiperSlide>
        <SwiperSlide><img src={samsungBrand} alt="" /></SwiperSlide>
      </Swiper>
    </div>
    );
};

export default AllBrands;