"use client";
import styles from "./styles.module.css";
import Image from "next/image";

import { slides } from "@/constants";
import "./slider.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <div className={`${styles.container} photo-slider`}>
      <Swiper
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={true}
        spaceBetween={100}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="mySwiper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 5,
          stretch: 25,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide}
              placeholder="blur"
              alt="photo"
              loading="lazy"
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
