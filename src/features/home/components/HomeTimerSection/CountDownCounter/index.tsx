import React from "react";
import { useCountdown } from "hooks";

const ExpiredNotice = () => {
  return (
    <div className="p-6">
      <span className="text-4xl text-red-light">Discount Expired !!</span>
      <p>See you soon with more discounts ^_^.</p>
    </div>
  );
};

const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return (
    <div className="flex items-center justify-start gap-2 transition-all duration-500 ease-in-out max-sm::flex-col md:gap-6 ">
      <div className="flex flex-col items-center px-4 py-3 md:px-8 md:py-6 text-center bg-white w-[118px] max-sm:w-2/4">
        <span className="text-xl font-semibold md:text-4xl">{days}</span>
        <p className="font-light text-slate-500">Days</p>
      </div>
      <div className="flex flex-col items-center px-4 py-3 md:px-8 md:py-6 text-center bg-white w-[118px] max-sm:w-2/4">
        <span className="text-xl font-semibold md:text-4xl">{hours}</span>{" "}
        <p className="font-light text-slate-500">Hours</p>
      </div>
      <div className="flex flex-col items-center px-4 py-3 md:px-8 md:py-6 text-center bg-white w-[118px] max-sm:w-2/4">
        <span className="text-xl font-semibold md:text-4xl">{minutes}</span>{" "}
        <p className="font-light text-slate-500">Minutes</p>
      </div>
      <div className="flex flex-col items-center px-4 py-3 md:px-8 md:py-6 text-center bg-white w-[118px] max-sm:w-2/4">
        <span className="text-xl font-semibold md:text-4xl">{seconds}</span>{" "}
        <p className="font-light text-slate-500">Seconds</p>
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }: { targetDate: number }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
