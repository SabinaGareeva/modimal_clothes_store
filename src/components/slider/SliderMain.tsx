import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import css from "./Slider.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SliderMain() {
  // const sliderRef = useRef(null);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // ref={sliderRef}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={css.main__swiper}
      >
        <SwiperSlide>
          <div>
            <img className={css.slider__img} src="/slider-12.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div>
            <img className={css.slider__img} src="/slider-2.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div>
            <img className={css.slider__img} src="/slider-3.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
