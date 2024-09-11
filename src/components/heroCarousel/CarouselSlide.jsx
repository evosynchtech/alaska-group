import React from "react";

function CarouselSlide({ ImgUrl }) {
  return (
    <div class="hero-carousel-swiper relative w-full max-h-screen swiper">
      <div class="hero-carousel-swiper-wrapper swiper-wrapper">
        <div class="swiper-slide">
          <div class="hero-carousel-slide w-full max-h-screen">
            <img
              className="w-full object-cover object-center"
              src={ImgUrl}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselSlide;
