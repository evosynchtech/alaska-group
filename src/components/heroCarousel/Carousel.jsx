import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";

import "./style.css";
import CarouselSlide from "./CarouselSlide";

function HeroCarousel() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        direction="horizontal"
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        className="hero-carousel-swiper"
      >
        <SwiperSlide>
          <CarouselSlide
            ImgUrl={
              "https://media.istockphoto.com/id/1269776313/photo/suburban-house.jpg?s=612x612&w=0&k=20&c=iNaSdrxJt7H37rjQZumXYScrmSTRm2fDJrqZzxpDL_k="
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide
            ImgUrl={
              "https://media.licdn.com/dms/image/D4D12AQEaLAZT_s7KfQ/article-cover_image-shrink_720_1280/0/1656939664338?e=2147483647&v=beta&t=UpQ_diu_xyow2FkCYcNtrCC1-2NwtSZ7VusR-l41TQo"
            }
          />
        </SwiperSlide>

        <div class="swiper-pagination"></div>

        <div class="swiper-prev text-[30px] cursor-pointer w-12 flex justify-center items-center aspect-square z-20 absolute rounded-full bg-white top-1/2 transition-[150ms] transform -translate-y-1/2 text-black left-[1%]">
          <i class="bi bi-chevron-left"></i>
        </div>
        <div class="swiper-next text-[30px] cursor-pointer w-12 flex justify-center items-center z-20 absolute aspect-square bg-white rounded-full top-1/2 transition-[150ms] transform -translate-y-1/2 text-black right-[1%]">
          <i class="bi bi-chevron-right"></i>
        </div>
      </Swiper>
    </>
  );
}

export default HeroCarousel;
