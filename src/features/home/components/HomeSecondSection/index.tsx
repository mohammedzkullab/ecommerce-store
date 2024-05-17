import clsx from "clsx";
import { Button, Card, Container, Link, Slider } from "components";
import { HOMEPAGE_SECOND_SLIDES } from "data";
import React from "react";

const BREAKPOINTS = {
  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};
export const HomeSecondSection = () => {
  return (
    <div className="absolute z-[1] w-full -mt-14 !duration-0">
      <Container>
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
                className="cursor-pointer !duration-0 !ease-in-out"
                slides={HOMEPAGE_SECOND_SLIDES}
                breakpoints={BREAKPOINTS}
              />
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default HomeSecondSection;
type SlideProps = {
  slide: {
    icon: any;
    label: string;
  };
  index: number;
  className?: string;
};
const Slide = ({ slide, index, className }: SlideProps) => {
  const classes = clsx(
    "flex flex-col items-center justify-center gap-2 px-5 py-12 text-center truncate bg-gray-100 ",
    className
  );
  return (
    <Link href="/shop" className="!duration-0 hover:!text-red-light">
      <div className={classes}>
        {React.createElement(slide?.icon, {
          className: "w-9 h-9",
        })}

        <p className="text-lg capitalize">{slide?.label}</p>
        <p className="text-lg capitalize">{slide?.label}</p>
      </div>
    </Link>
  );
};
