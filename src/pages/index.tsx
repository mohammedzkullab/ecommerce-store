import { Button, Card, NoSSR, Slider } from "components";
import { HOMEPAGE_SECOND_SLIDES } from "data";
import { HomeSlider } from "features/home";
import React from "react";

const Home = () => {
  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <NoSSR>
      <div className="relative pb-48">
        <HomeSlider />
        <div className="absolute z-50 w-full -mt-14">
          <div className="container">
            <Card>
              <div className="items-center w-full grid-cols-3 gap-4 px-6 md:grid">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-medium">Top Categories</h3>
                  <p className="my-3 text-lg md:w-4/5 whitespace-wrap">
                    There are many variations of passages of Lorem
                  </p>
                  <Button
                    variant="outline"
                    className="!border-black !text-black hover:!bg-black hover:!text-white !px-5"
                  >
                    View All
                  </Button>
                </div>
                <div className="relative col-span-2 mt-6">
                  <Slider
                    slideShape={(slide: any, index: number) => (
                      <Slide slide={slide} index={index} />
                    )}
                    slides={HOMEPAGE_SECOND_SLIDES}
                    breakpoints={breakpoints}
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="">sssssssssssssss</div>
    </NoSSR>
  );
};

export default Home;

type SlideProps = {
  slide: {
    icon: any;
    label: string;
  };
  index: number;
};
const Slide = ({ slide, index }: SlideProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-5 py-12 text-black bg-gray-100 hover:text-red-light">
      <span>{React.createElement(slide?.icon, { className: "w-9 h-9" })}</span>
      <p className="text-lg capitalize">{slide?.label}</p>
    </div>
  );
};
