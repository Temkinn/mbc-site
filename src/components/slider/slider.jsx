import styles from "./styles.module.css";
import Image from "next/image";
import { useState } from "react";

import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
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
  const slides = [
    {
      name: "1",
      photo: photo1,
    },
    {
      name: "2",
      photo: photo2,
    },
    {
      name: "3",
      photo: photo3,
    },
    {
      name: "4",
      photo: photo4,
    },
    {
      name: "5",
      photo: photo5,
    },
    {
      name: "6",
      photo: photo6,
    },
  ];

  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className={styles.container}>
		<div className={styles.pc}>
        <Swiper
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={20}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="mySwiper"
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
        >
          <SwiperSlide>
            <Image src={require("./photos/1.jpg")} alt="photo" fill />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={require("./photos/2.jpg")} alt="photo" fill />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={require("./photos/3.jpg")} alt="photo" fill />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={require("./photos/4.jpg")} alt="photo" fill />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={require("./photos/5.jpg")} alt="photo" fill />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={require("./photos/6.jpg")} alt="photo" fill />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.telephone}>
        <div className={styles.right} onClick={next} id={styles.button} />
        <div className={styles.left} onClick={prev} id={styles.button} />
        <div className={styles.sliderContainer}>
          <div
            className={styles.slider}
            id="slider"
            style={{
              transform: `translateX(-${curr * 100}%)`,
              transition: "transform .5s ease-in-out",
            }}
          >
            {slides.map((image) => {
              return (
                <div
                  id={styles.element}
                  key={image.name}
                  className={styles.element}
                >
                  <Image
                    src={image.photo}
                    alt="kawda"
                    className={styles.photo}
                    fill={true}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
