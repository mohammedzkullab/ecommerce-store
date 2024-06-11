"use client";
import { Product, Slider } from "components";
import { PRODUCTS_SLIDER_ITEMS } from "data";
import { ProductType } from "types";

export const Slide = ({
  slide,
  index,
}: {
  slide: ProductType;
  index: number;
}) => {
  return <Product productData={slide} />;
};
export const SpecialOffersSlider = () => {
  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };
  return (
    <div>
      <Slider
        slides={PRODUCTS_SLIDER_ITEMS}
        loop
        slidesPerView={3}
        breakpoints={breakpoints}
        slideShape={(slide: any, index: number) => (
          <Slide slide={slide} index={index} />
        )}
      />
    </div>
  );
};
export default SpecialOffersSlider;
