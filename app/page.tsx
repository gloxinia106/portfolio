"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard, Parallax } from "swiper/modules";
import { HomeSection } from "@/app/components/section/home-section";

import "swiper/css";
import "swiper/css/pagination";
import { AboutSection } from "./components/section/about-section";
import { Nav } from "./components/nav";
import { useState } from "react";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      modules={[Pagination, Mousewheel, Keyboard, Parallax]}
      mousewheel={true}
      keyboard={true}
      parallax={true}
      speed={800}
      onSlideChange={(swiper) => {
        setSlideIndex(swiper.activeIndex);
      }}
      className="h-screen"
    >
      <Nav slideIndex={slideIndex} />
      <SwiperSlide>
        <HomeSection />
      </SwiperSlide>
      <SwiperSlide>
        <AboutSection />
      </SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
}
