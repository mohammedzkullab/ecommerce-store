"use client";
import { useEffect, useState } from "react";

const useCountdown = (targetDate: number) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCountdown = localStorage.getItem("countdown");
      setCountDown(
        savedCountdown
          ? parseInt(savedCountdown)
          : countDownDate - new Date().getTime()
      );
    }
  }, [countDownDate]);

  useEffect(() => {
    if (countDown !== null) {
      const interval = setInterval(() => {
        setCountDown((prevCountDown) => {
          const newCountDown = countDownDate - new Date().getTime();
          localStorage.setItem("countdown", newCountDown.toString());
          return newCountDown;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [countDownDate, countDown]);

  return countDown !== null ? getReturnValues(countDown) : [0, 0, 0, 0];
};

const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
