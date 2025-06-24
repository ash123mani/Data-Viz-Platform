import { type DefaultTheme } from 'styled-components';

import { colors } from "./colors.ts";

const theme: DefaultTheme =  {
  colors,
}

export type Theme = typeof theme;

export default theme;
