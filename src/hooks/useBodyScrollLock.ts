import { useLayoutEffect } from "react";

let instancesCount = 0;

export const useBodyScrollLock = () => {
  useLayoutEffect(() => {
    instancesCount++;
    const initialStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      instancesCount--;

      if (instancesCount === 0) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = initialStyle;
      }
    };
  }, []);
};
