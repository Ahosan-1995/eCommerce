"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../components/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <div>
          <SwiperSlide className="flex flex-col">
            <span>Our Setup 1</span>
            <Ima
          </SwiperSlide>

          <SwiperSlide className="flex flex-col">
            <span>Our Setup 1</span>
            <img src="https://i.postimg.cc/cJsZnggn/slider1.jpg" alt="slider" />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <span>Our Setup 2</span>
            <img src="https://i.postimg.cc/R0XmQSKb/slider2.jpg" alt="slider" />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <span>Our Setup 3</span>
            <img src="https://i.postimg.cc/Kzj2065c/slider3.jpg" alt="slider" />
          </SwiperSlide>
        </div>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
