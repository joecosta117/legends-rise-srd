export const BREAKPOINTS = {
  MOBILE: 767.98,
  TABLET: 1023.8,
  DESKTOP: 1439.98,
};
  
export function getBreakpoint() {
  const width = window.innerWidth;

  if (width <= BREAKPOINTS.MOBILE) {
    return 'MOBILE';
  } else if (width <= BREAKPOINTS.TABLET) {
    return 'TABLET';
  } else if (width <= BREAKPOINTS.DESKTOP) {
    return 'DESKTOP';
  } else {
    return 'WIDE';
  }
}