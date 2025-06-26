import { type DefaultTheme } from 'styled-components';

import { colors } from "./colors.ts";
import { spacing } from "./spacing.ts";
import { borderRadius } from "./borderRadius.ts";
import { breakpoints, mediaQuery } from "./breakpoints.ts";

const theme: DefaultTheme =  {
  colors,
  spacing,
  borderRadius,
  breakpoints,
  mediaQuery
}

export type Theme = typeof theme;

export default theme;
