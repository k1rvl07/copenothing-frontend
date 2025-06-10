import type { Breakpoints } from "./types";

export const BREAKPOINTS: Breakpoints = {
  isDesktop: {
    minWidth: 1600,
  },
  isLaptop: {
    minWidth: 1024,
    maxWidth: 1599,
  },
  isTablet: {
    minWidth: 768,
    maxWidth: 1023,
  },
  isMobile: {
    maxWidth: 767,
  },
};
