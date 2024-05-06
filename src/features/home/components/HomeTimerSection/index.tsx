import { Button, Container } from "components";
import React from "react";

export const HomeTimerSection = () => {
  return (
    <div className="pb-[30px] md:pb-[70px] bg-timer-bg bg-cover bg-no-repeat py-24">
      <Container className="px-16 row">
        <h3 className="mb-2 text-3xl font-semibold">Big Sale Deal</h3>
        <h2 className="mb-6 text-6xl font-bold text-red-light">Sale 40% Off</h2>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center px-8 py-6 text-center bg-white">
            <span className="!text-4xl font-semibold">60</span>
            <p className="font-light text-slate-500">days</p>
          </div>
          <div className="flex flex-col items-center px-8 py-6 text-center bg-white">
            <span className="text-4xl font-semibold">60</span>{" "}
            <p className="font-light text-slate-500">hours</p>
          </div>
          <div className="flex flex-col items-center px-8 py-6 text-center bg-white">
            <span className="text-4xl font-semibold">60</span>{" "}
            <p className="font-light text-slate-500">minutes</p>
          </div>
          <div className="flex flex-col items-center px-8 py-6 text-center bg-white">
            <span className="text-4xl font-semibold">60</span>{" "}
            <p className="font-light text-slate-500">seconds</p>
          </div>
        </div>
        <Button className="!px-8 mt-6">Shop Now</Button>
      </Container>
    </div>
  );
};

export default HomeTimerSection;
