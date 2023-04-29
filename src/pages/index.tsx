import { Slider } from "components";
import NoSSR from "components/NoSSR";

const SLIDES = [
  {
    image: "https://source.unsplash.com/random",
    content: {
      badge: "badge",
      heading: "heading",
      paragraph: "paraa",
    },
  },
  {
    image: "https://source.unsplash.com/random",
    content: {
      badge: "sssssss",
      heading: "ssssss",
      paragraph: "sssssss",
    },
  },
  {
    image: "https://source.unsplash.com/random",
    content: {
      badge: "sssssss",
      heading: "ssssss",
      paragraph: "sssssss",
    },
  },
];
const Home = () => {
  return (
    <NoSSR>
      <div className="">
        <Slider slides={SLIDES} />
      </div>
    </NoSSR>
  );
};

export default Home;
