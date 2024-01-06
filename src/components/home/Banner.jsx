/* eslint-disable jsx-a11y/no-distracting-elements */
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

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Link, useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto mt-4">
      <div className="flex gap-5">
        <div className="w-1/5 ml-2 hidden lg:block">
          <ul className="bg-slate-700 text-white  rounded-sm">
            <li className="border-b p-1 cursor-pointer hover:bg-slate-600">
              <Link>Computer & Accessories</Link>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <Link>Laptop</Link>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <Link>Mobile & Tablet</Link>
            </li>
            <li
              onClick={() => navigate("products/SmartWatch")}
              className=" border-b p-1 cursor-pointer hover:bg-slate-600"
            >
              <Link>Watch & Smart Watch</Link>
            </li>
            <li
              onClick={() => navigate("products/Headphone")}
              className=" border-b p-1 cursor-pointer hover:bg-slate-600"
            >
              <Link>Audio & Headphones</Link>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <Link>Router</Link>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <Link>Telivition & Desplay</Link>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <Link>Electronics</Link>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <Link>Office Supplies</Link>
            </li>
            <li className=" border-b p-1 cursor-pointer hover:bg-slate-600">
              <Link>Home Appliance</Link>
            </li>
            <li className="p-1 cursor-pointer hover:bg-slate-600">
              <Link>Printer & Ink</Link>
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
      <div className="mt-4 mx-2">
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
