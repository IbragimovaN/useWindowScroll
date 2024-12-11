import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";
import { useThrottle } from "./useThrottle";

export const useWindowScroll = () => {
  const [scroll, setScroll] = useState({
    x: window.scrollX,
    y: window.scrollY,
  });

  const throttledScroll = useThrottle(scroll);

  useWindowEvent("scroll", () => {
    setScroll({ x: window.scrollX, y: window.scrollY });
    console.log("scroll");
  });

  const scrollTo = ({ y }) => {
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return [throttledScroll, scrollTo];
};
