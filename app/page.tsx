"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard, Navigation } from "swiper/modules";
import { HomeSection } from "@/app/components/section/home-section";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArchivingSection } from "./components/section/archiving-section";
import { Nav } from "./components/nav";
import { useEffect, useState } from "react";
import { SectionLayout } from "./components/section-layout";
import { GithubComponent } from "./components/achiving/github";
import { TistoryComponent } from "./components/achiving/tistory";
import { DolimpanComponent } from "./components/projects/dolimpan";
import { SetTimerComponents } from "./components/projects/setTimer";
import { BlueArchiveComponent } from "./components/projects/blueArchive";
import { PortFolioComponent } from "./components/projects/portfolio";
import { QquizzesComponent } from "./components/projects/qquizzes";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isSlide, setIsSlide] = useState(false);

  const handleIsSlide = () => {
    if (window.innerWidth < 960) {
      setIsSlide(true);
    } else {
      setIsSlide(false);
    }
  };
  useEffect(() => {
    handleIsSlide();
    window.addEventListener("resize", () => {
      handleIsSlide();
    });
  }, []);

  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      modules={[Mousewheel, Keyboard]}
      mousewheel={true}
      keyboard={true}
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
      <SwiperSlide className="bg-yellow-500">
        {isSlide ? (
          <SectionLayout title="ARCHIVING">
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={true}
              className="rounded-2xl archiving"
              spaceBetween={30}
              loop={true}
              navigation={true}
              style={{ position: "static" }}
            >
              <SwiperSlide style={{ height: "auto" }}>
                <GithubComponent />
              </SwiperSlide>
              <SwiperSlide>
                <TistoryComponent />
              </SwiperSlide>
            </Swiper>
          </SectionLayout>
        ) : (
          <ArchivingSection />
        )}
      </SwiperSlide>
      <SwiperSlide className="bg-gray-900">
        <SectionLayout title="PROJECTS" titleColor="white">
          <Swiper
            modules={[Pagination, Navigation]}
            className="projects"
            pagination={true}
            navigation={true}
            spaceBetween={30}
            loop={true}
            style={{ position: "static" }}
          >
            <SwiperSlide>
              <DolimpanComponent />
            </SwiperSlide>
            <SwiperSlide>
              <SetTimerComponents />
            </SwiperSlide>
            <SwiperSlide>
              <BlueArchiveComponent />
            </SwiperSlide>
            <SwiperSlide>
              <PortFolioComponent />
            </SwiperSlide>
            <SwiperSlide>
              <QquizzesComponent />
            </SwiperSlide>
          </Swiper>
        </SectionLayout>
      </SwiperSlide>
      <SwiperSlide className="bg-neutral-100"></SwiperSlide>
    </Swiper>
  );
}
