export const BREAKPOINTS = {
    MOBILE: 374.98,
    TABLET: 767.98,
    DESKTOP: 1023.8,
    WIDE: 1439.98,
  };
  
  export function getBreakpoint() {
    const width = window.innerWidth;
  
    if (width <= BREAKPOINTS.MOBILE) {
      return 'MOBILE';
    } else if (width <= BREAKPOINTS.TABLET) {
      return 'TABLET';
    } else if (width <= BREAKPOINTS.DESKTOP) {
      return 'DESKTOP';
    } else if (width <= BREAKPOINTS.WIDE) {
      return 'WIDE';
    } else {
      return 'EXTRA_WIDE';
    }
  }