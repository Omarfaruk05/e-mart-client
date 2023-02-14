import React from "react";
import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";
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
    <div className="max-w-7xl mx-auto mt-4">
      <div className="flex gap-5">
        <div className="w-1/5">
          <ul className="bg-slate-700 text-white rounded-sm">
            <li className="border-b p-2 cursor-pointer hover:bg-slate-600">
              <a>Computer & Accessories</a>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <a>Laptop</a>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <a>Mobile & Tablet</a>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <a>Camera & Video</a>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <a>Audio & Headphones</a>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <a>Router</a>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <a>Telivition & Desplay</a>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <a>Electronics</a>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <a>Office Supplies</a>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <a>Home Appliance</a>
            </li>
            <li className="p-1 cursor-pointer hover:bg-slate-600">
              <a>Printer & Ink</a>
            </li>
          </ul>
        </div>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper md:min-h-[220px] w-4/5"
        >
          <SwiperSlide>
            <img src={banner1} alt="" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={banner2} alt="" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={banner3} alt="" className="w-full" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-4">
        <marquee
          className="p-2 rounded-full font-semibold text-slate-800"
          direction="left"
          bgcolor="white"
        >
          ই-মার্টে আপনাদেরকে স্বাগতম। সকল প্রকার ইলেক্ট্রনিক পন্যের জন্য
          বাংলাদেশের একমাত্র বিশ্বস্ত ঠিকানা ই-মার্ট। শুক্রবার ই-মার্টের সকল
          সেবা বন্ধ থাকবে।
        </marquee>
      </div>
    </div>
  );
};

export default Banner;
