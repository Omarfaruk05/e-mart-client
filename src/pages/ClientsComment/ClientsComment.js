import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';

const ClientsComment = () => {
    return (
      <div className='bg-slate-50'>
        <div className='max-w-7xl mx-auto py-4 hidden md:block'>
        <h1 className='text-center text-4xl font-bold pt-4'>What are people saying about us</h1>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper my-8"
    >
      <SwiperSlide>
        <div className='border rounded-lg shadow-xl mb-12 p-2 m-4 h-80'>
        <ChatBubbleLeftEllipsisIcon className='h-20 text-orange-500 text-center w-full mb-4'></ChatBubbleLeftEllipsisIcon>
          <p>I am a web developer for many years i haven't seen anything clear clean coded like journal it makes my live so much easier thanks for the great work you have done.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border rounded-lg shadow-xl mb-12 p-2 m-4 h-80'>
        <ChatBubbleLeftEllipsisIcon className='h-20 text-orange-500 text-center w-full mb-4'></ChatBubbleLeftEllipsisIcon>
          <p>I am a web developer for many years i haven't seen anything clear clean coded like journal it makes my live so much easier thanks for the great work you have done.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border rounded-lg shadow-xl mb-12 p-2 m-4 h-80'>
        <ChatBubbleLeftEllipsisIcon className='h-20 text-orange-500 text-center w-full mb-4'></ChatBubbleLeftEllipsisIcon>
          <p>Great toolkit for Opencart. As a base platform, Opencart can be a nightmare to modify and get looking good. Journal takes away all the pain.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border rounded-lg shadow-xl mb-12 p-2 m-4 h-80'>
          <ChatBubbleLeftEllipsisIcon className='h-20 text-orange-500 text-center w-full mb-4'></ChatBubbleLeftEllipsisIcon>
          <p>I've purchased hundreds and hundreds of files over the past 7 years. But there is nothing close to this support and professionalism. Not only is theme, simple , useful and modern, but again the support is remarkable.  Very happy I got this theme! Thank you!</p>            
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border rounded-lg shadow-xl mb-12 p-2 m-4 h-80'>
        <ChatBubbleLeftEllipsisIcon className='h-20 text-orange-500 text-center w-full mb-4'></ChatBubbleLeftEllipsisIcon>
          <p>I am a web developer for many years i haven't seen anything clear clean coded like journal it makes my live so much easier thanks for the great work you have done.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border rounded-lg shadow-xl mb-12 p-2 m-4 h-80'>
        <ChatBubbleLeftEllipsisIcon className='h-20 text-orange-500 text-center w-full mb-4'></ChatBubbleLeftEllipsisIcon>
          <p>Great toolkit for Opencart. As a base platform, Opencart can be a nightmare to modify and get looking good. Journal takes away all the pain.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  </div>
    );
};

export default ClientsComment;