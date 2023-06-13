import { NoSSR, Product } from "components";
import { TEST_PRODUCT } from "data";
import { HomeSlider, HomeSecondSection } from "features/home";
import React from "react";

const Home = () => {
  return (
    <NoSSR>
      <div className="relative pb-96 md:pb-52">
        <HomeSlider />
        <HomeSecondSection />
      </div>
      <div className="container pt-8 text-center">
        <div className="max-w-lg m-auto">
          <h2 className="text-4xl font-bold ">Our Top Products</h2>
          <p className="my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit massa enim Nullam nunc varius.
          </p>
        </div>
        <Product productData={TEST_PRODUCT} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          <Product productData={TEST_PRODUCT} />
          <Product productData={TEST_PRODUCT} />
          <Product productData={TEST_PRODUCT} />
          <Product productData={TEST_PRODUCT} />
        </div>
      </div>
    </NoSSR>
  );
};

Home.mainLayoutProps = {
  title: "E-commerce Store | Home",
  description: "E-commerce Store | Home page",
  mainClassName: "pb-32",
};
export default Home;
