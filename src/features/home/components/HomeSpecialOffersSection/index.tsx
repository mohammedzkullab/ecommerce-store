import { Container } from "components";
import React from "react";
import SpecialOffersSlider from "./SpecialOffersSlider";

export const HomeSpecialOffersSection = () => {
  return (
    <Container className="py-24">
      <div className="max-w-lg m-auto text-center">
        <h2 className="text-3xl font-bold">Special Offers</h2>
        <p className="my-6 text-md text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          blandit massa enim Nullam nunc varius.
        </p>
      </div>
      <SpecialOffersSlider />
    </Container>
  );
};

export default HomeSpecialOffersSection;
