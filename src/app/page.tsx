"use client"
import { HeadingWithDesc } from "components";
import ProductsGrid from "components/ProductsGrid";
import { TEST_PRODUCT } from "data";
import {
  HomeSlider,
  HomeSecondSection,
  HomeTimerSection,
  HomeSpecialOffersSection,
  HomeBlogSection,
} from "features/home";

const Home = () => {
  return (
    <>
      <div className="relative pb-96 md:pb-52">
        <HomeSlider />
        <HomeSecondSection />
      </div>
      <HeadingWithDesc
        heading="Our Top Products"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          blandit massa enim Nullam nunc varius."
        className="pt-8"
      />
      <ProductsGrid
        products={[
          TEST_PRODUCT,
          TEST_PRODUCT,
          TEST_PRODUCT,
          TEST_PRODUCT,
          TEST_PRODUCT,
        ]}
      />
      <HomeTimerSection />
      <HomeSpecialOffersSection />
      <HomeBlogSection />
    </>
  );
};

export default Home;
