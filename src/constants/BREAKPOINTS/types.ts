export type BreakpointRange = {
  minWidth?: number;
  maxWidth?: number;
};

export type Breakpoints = {
  isDesktop: BreakpointRange;
  isLaptop: BreakpointRange;
  isTablet: BreakpointRange;
  isMobile: BreakpointRange;
};
