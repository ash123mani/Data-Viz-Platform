import 'styled-components';
import { colors } from "./common/theme/colors.ts";
import { spacing } from "./common/theme/spacing.ts";
import { borderRadius } from "./common/theme/borderRadius.ts";
import { breakpoints, mediaQuery } from "./common/theme/breakpoints.ts";


declare module 'styled-components' {
    export interface DefaultTheme {
        colors: typeof colors;
        spacing: typeof spacing;
        borderRadius: typeof borderRadius;
        breakpoints: typeof breakpoints;
        mediaQuery: typeof mediaQuery;
    }
}
