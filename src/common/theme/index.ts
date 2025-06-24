import { type DefaultTheme } from 'styled-components';

import { colors } from "./colors.ts";
import { spacing } from "./spacing.ts";
import { borderRadius } from "./borderRadius.ts";

const theme: DefaultTheme =  {
  colors,
  spacing,
  borderRadius
}

export type Theme = typeof theme;

export default theme;
