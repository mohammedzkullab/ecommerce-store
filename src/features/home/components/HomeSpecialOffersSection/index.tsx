import { Container, HeadingWithDesc } from "components";
import React from "react";
import SpecialOffersSlider from "./SpecialOffersSlider";

export const HomeSpecialOffersSection = () => {
  return (
    <Container className="py-24">
      <HeadingWithDesc
        heading="Special Offers"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          blandit massa enim Nullam nunc varius."
      />
      <SpecialOffersSlider />
    </Container>
  );
};

export default HomeSpecialOffersSection;
