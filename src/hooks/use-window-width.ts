import { useCallback, useEffect, useState } from "react";

export function useWindowWidth(): number {
  const getWindowWidth = () =>
    typeof window !== "undefined" ? window.innerWidth : 0;

  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth);

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(getWindowWidth());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateWindowWidth);

      return () => {
        window.removeEventListener("resize", updateWindowWidth);
      };
    }
  }, [updateWindowWidth]);

  return windowWidth;
}
