import { NoSSR } from "components";
import ProductsGrid from "components/ProductsGrid";
import { TEST_PRODUCT } from "data";
import { HomeSlider, HomeSecondSection, HomeTimerSection } from "features/home";
import HomeSpecialOffersSection from "features/home/components/HomeSpecialOffersSection";

const Home = () => {
  return (
    <NoSSR>
      <div className="relative pb-96 md:pb-52">
        <HomeSlider />
        <HomeSecondSection />
      </div>
      <div className="container pt-8 text-center">
        <div className="max-w-lg m-auto">
          <h2 className="text-3xl font-bold ">Our Top Products</h2>
          <p className="my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit massa enim Nullam nunc varius.
          </p>
        </div>
      </div>
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
    </NoSSR>
  );
};

Home.mainLayoutProps = {
  title: "E-commerce Store | Home",
  description: "E-commerce Store | Home page",
  mainClassName: "pb-32",
};
export default Home;
