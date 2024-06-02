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
      className="!h-[70vh] md:!h-screen"
      loop
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
    <div className="w-full h-full">
      <Image
        src={slide?.image}
        alt={`image number ${index + 1}`}
        width={1500}
        height={1500}
        priority={true}
        className="slider-image"
      />
      <div className="overlay"></div>
      <div className="flex flex-col items-center justify-center w-full h-full text-white ">
        {slide?.content?.badge && (
          <p className="relative flex justify-center px-2 py-1 text-center md:text-2xl bg-red-light badge-striped">
            {slide?.content?.badge}
          </p>
        )}
        {slide?.content?.heading && (
          <p className="my-4 text-4xl font-semibold md:text-7xl">
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
