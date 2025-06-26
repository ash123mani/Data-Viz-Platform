// theme.ts
export const breakpoints = {
  mobile: 480,    // in pixels (numbers are easier for calculations)
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

export const mediaQuery = {
  // Mobile-first min-width queries (recommended approach)
  mobile: `(min-width: ${breakpoints.mobile}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  laptop: `(min-width: ${breakpoints.laptop}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,

  // Max-width queries (for specific cases)
  upToMobile: `(max-width: ${breakpoints.mobile - 1}px)`,
  upToTablet: `(max-width: ${breakpoints.tablet - 1}px)`,
  upToLaptop: `(max-width: ${breakpoints.laptop - 1}px)`,

  // Range queries (when needed)
  tabletOnly: `(min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.tablet - 1}px)`,
  laptopOnly: `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.laptop - 1}px)`
};

