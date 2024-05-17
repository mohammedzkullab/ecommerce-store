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
    <div className="flex items-center justify-start gap-6 max-sm:flex-col">
      <div className="flex flex-col items-center px-8 py-6 text-center bg-white w-[118px] max-sm:w-2/4">
        <span className="!text-4xl font-semibold">{days}</span>
        <p className="font-light text-slate-500">days</p>
      </div>
      <div className="flex flex-col items-center px-8 py-6 text-center bg-white w-[118px] max-sm:w-2/4">
        <span className="text-4xl font-semibold">{hours}</span>{" "}
        <p className="font-light text-slate-500">hours</p>
      </div>
      <div className="flex flex-col items-center px-8 py-6 text-center bg-white w-[118px] max-sm:w-2/4">
        <span className="text-4xl font-semibold">{minutes}</span>{" "}
        <p className="font-light text-slate-500">minutes</p>
      </div>
      <div className="flex flex-col items-center px-8 py-6 text-center bg-white w-[118px] max-sm:w-2/4">
        <span className="text-4xl font-semibold">{seconds}</span>{" "}
        <p className="font-light text-slate-500">seconds</p>
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
