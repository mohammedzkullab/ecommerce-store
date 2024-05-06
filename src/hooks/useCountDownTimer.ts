import { useEffect, useState } from "react";

const useCountdown = (targetDate: number) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    parseInt(localStorage.getItem("countdown") as string) ||
      countDownDate - new Date().getTime()
  );

  useEffect(() => {
    console.log(countDown);
  }, [countDown]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prevCountDown) => {
        const newCountDown = countDownDate - new Date().getTime();
        localStorage.setItem("countdown", newCountDown.toString());
        return newCountDown;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
