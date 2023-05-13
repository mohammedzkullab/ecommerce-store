import { Button, Slider } from "components";
import { HOMEPAGE_MAIN_SLIDES } from "data";
import Image from "next/image";

export const HomeSlider = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  };
  return (
    <Slider
      slides={HOMEPAGE_MAIN_SLIDES}
      className="!h-screen"
      breakpoints={breakpoints}
      mousewheel={false}
      slideShape={(slide: any, index: number) => (
        <Slide slide={slide} index={index} />
      )}
    />
  );
};

export default HomeSlider;

export const Slide = ({ slide, index }: { slide: any; index: number }) => {
  return (
    <div className="h-full w-full">
      <Image
        src={slide?.image}
        alt={`image number ${index + 1}`}
        width={1500}
        height={1500}
        priority={true}
        className="slider-image"
      />
      <div className="overlay"></div>
      <div className="flex flex-col items-center justify-center h-full w-full text-white ">
        {slide?.content?.badge && (
          <p className="md:text-2xl px-6 bg-red-light ">
            {slide?.content?.badge}
          </p>
        )}
        {slide?.content?.heading && (
          <p className="text-4xl md:text-7xl font-semibold my-4">
            {slide?.content?.heading}
          </p>
        )}
        {slide?.content?.paragraph && (
          <p className="text-lg">{slide?.content?.paragraph}</p>
        )}
        <Button variant="secondary" className="px-8 md:w-[200px] !py-4 my-4">
          shop now
        </Button>
      </div>
    </div>
  );
};
