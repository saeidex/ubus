"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";

export const useCurrentDateTime = () => {
  const [date, setDate] = useState(new Date());
  const currentTime = format(date, "h:mm a");
  const currentDate = format(date, "d MMM, yyyy");

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  return {
    currentDate,
    currentTime,
  };
};
