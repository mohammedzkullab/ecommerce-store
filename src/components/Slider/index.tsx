import React from "react";
import { SliderProps } from "../types";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  FreeMode,
  Autoplay,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";

export const Slider = ({
  slides,
  className = "text-black",
  slideShape,
  spaceBetween = 0,
  slidesPerView = 1,
  navigation = true,
  pagination,
  onSwiper = console.log,
  onSlideChange = console.log,
  mousewheel = true,
  keyboard = true,
  modules = [],
  lazyPreloadPrevNext = 1,
  loop = false,
  speed = 400,
  breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  ...rest
}: SliderProps) => {
  return (
    <Swiper
      // spaceBetween={spaceBetween}
      // slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={...pagination}
      onSwiper={() => onSwiper()}
      onSlideChange={() => onSlideChange()}
      // cssMode={cssMode}
      // mousewheel={mousewheel}
      keyboard={keyboard}
      lazyPreloadPrevNext={lazyPreloadPrevNext}
      loop={loop}
      speed={speed}
      modules={[
        Navigation,
        Pagination,
        // Mousewheel,
        Keyboard,
        FreeMode,
        Autoplay,
        ...modules,
      ]}
      breakpoints={breakpoints}
      effect="fade"
      {...rest}
    >
      <div className="relative">
        {slides?.map((slide, index) => (
          <SwiperSlide key={index} className={`${className ?? ""}`}>
            {slideShape(slide, index)}
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
export default Slider;
