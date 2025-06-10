"use client";
import { BREAKPOINTS } from "@constants";
import { useMediaQuery } from "react-responsive";

export const useMediaQueries = () => {
  const isDesktop = useMediaQuery({ minWidth: BREAKPOINTS.isDesktop.minWidth });
  const isLaptop = useMediaQuery({ minWidth: BREAKPOINTS.isLaptop.minWidth, maxWidth: BREAKPOINTS.isLaptop.maxWidth });
  const isTablet = useMediaQuery({ minWidth: BREAKPOINTS.isTablet.minWidth, maxWidth: BREAKPOINTS.isTablet.maxWidth });
  const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.isMobile.maxWidth });
  return {
    isDesktop,
    isLaptop,
    isTablet,
    isMobile,
  };
};
