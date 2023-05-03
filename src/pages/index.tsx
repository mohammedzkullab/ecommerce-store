import { Slider, NoSSR } from "components";
import { HOMEPAGE_MAIN_SLIDES } from "data";

const Home = () => {
  return (
    <NoSSR>
      <div className="">
        <Slider slides={HOMEPAGE_MAIN_SLIDES} />
      </div>
    </NoSSR>
  );
};

export default Home;
