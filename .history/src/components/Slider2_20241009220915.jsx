"use client";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "../components/stylex.css";


// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

const Slider2 = () => {
    return (
        <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div>Hi this is me</div></SwiperSlide>
        <SwiperSlide><div>Hi this is me</div></SwiperSlide>
        <SwiperSlide><div>Hi this is me</div></SwiperSlide>
        <SwiperSlide><div>Hi this is me</div></SwiperSlide>
      </Swiper>
    </>
    );
};

export default Slider2;
