"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard, Parallax } from "swiper/modules";
import { HomeSection } from "@/app/components/section/home-section";

import "swiper/css";
import "swiper/css/pagination";
import { AboutSection } from "./components/section/about-section";

export default function Home() {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      modules={[Pagination, Mousewheel, Keyboard, Parallax]}
      mousewheel={true}
      keyboard={true}
      parallax={true}
      speed={800}
      className="h-screen"
    >
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
