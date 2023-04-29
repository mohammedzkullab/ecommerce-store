import { SliderProps } from "types";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export const Slider = ({
  slides,
  className = "w-full text-black",
  spaceBetween = 0,
  slidesPerView = 1,
  navigation = true,
  pagination,
  onSwiper = console.log,
  onSlideChange = console.log,
  cssMode = true,
  mousewheel = true,
  keyboard = true,
  modules = [],
  ...rest
}: SliderProps) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={...pagination}
      onSwiper={() => onSwiper()}
      onSlideChange={() => onSlideChange()}
      cssMode={cssMode}
      mousewheel={mousewheel}
      keyboard={keyboard}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, ...modules]}
      {...rest}
    >
      <>
        {slides?.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`min-h-screen !h-screen ${className ?? ""}`}
          >
            <div className="slider-center">
              <Image
                src={slide?.image}
                alt={`image number ${index + 1}`}
                width={500}
                height={500}
                className="slider-image"
              />
              <div className="overlay"></div>
              <div className="flex flex-col z-20">
                {slide?.content?.badge && (
                  <p className="text-3xl">{slide?.content?.badge}</p>
                )}
                {slide?.content?.heading && (
                  <p className="text-3xl">{slide?.content?.heading}</p>
                )}
                {slide?.content?.paragraph && (
                  <p className="text-3xl">{slide?.content?.paragraph}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};
export default Slider;
