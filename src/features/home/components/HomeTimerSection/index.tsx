import { Button, Container } from "components";
import React from "react";
import CountdownTimer from "./CountDownCounter";

export const HomeTimerSection = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div className="pb-[30px] md:pb-[70px] bg-timer-bg !bg-cover bg-no-repeat bg-center py-24">
      <Container className="px-16 row">
        <h3 className="mb-2 text-3xl font-semibold">Big Sale Deal</h3>
        <h2 className="mb-6 text-6xl font-bold text-red-light max-sm:text-5xl">
          Sale 40% Off
        </h2>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        <div className="flex max-sm:justify-center">
          <Button className="!px-8 mt-6 max-sm:w-2/4 ">Shop Now</Button>
        </div>
      </Container>
    </div>
  );
};

export default HomeTimerSection;
