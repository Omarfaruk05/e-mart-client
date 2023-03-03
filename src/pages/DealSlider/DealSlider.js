import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderphoto from "../../assets/discount-photo/disouunt-1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./DealSlider.css";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";
import { useSelector } from "react-redux";

const DealSlider = () => {
  // const swiperSlides = [1, 2, 3, 4, 5];
  const { headphones, isLoading } = useSelector((state) => state.headphones);
  console.log(headphones);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isLoading) {
    return (
      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#ffff",
            "--swiper-pagination-color": "#ffff",
            height: "500px",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-color": "white",
            }}
            data-swiper-parallax="-23%"
          ></div>
          {headphones.status ? (
            headphones.data.map((swiperSlide) => (
              <SwiperSlide className="swiper-slidebar">
                <div className="title w-1/2" data-swiper-parallax="-300">
                  <img width="1000px" src={sliderphoto} alt="" />
                </div>
                <div className="text w-1/2" data-swiper-parallax="0">
                  <div>
                    <h3 className="text-2xl font-bold mb-8">
                      ASUSE ZENDAPAS 7
                    </h3>
                    <h2 className="text-3xl font-semibold text-green-500">
                      $120
                    </h2>
                    <div className="mt-28 mx-auto w-full  h-5 rounded-lg bg-green-500"></div>
                    <div className="flex justify-between items-center px-20 mt-3">
                      <h4 className="text-gray-500 text-lg font-semibold  ">
                        Sold: <span className="text-black">2</span>
                      </h4>
                      <h4 className="text-gray-500 text-lg font-semibold  ">
                        Available: <span className="text-black">0</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p>loading</p>
          )}
        </Swiper>
      </>
    );
  }
};

export default DealSlider;
