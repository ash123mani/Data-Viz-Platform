import 'styled-components';
import { colors } from "./src/common/theme/colors";
import { spacing } from "./src/common/theme/spacing";
import { borderRadius } from "./src/common/theme/borderRadius";


declare module 'styled-components' {
    export interface DefaultTheme {
        colors: typeof colors;
        spacing: typeof spacing;
        borderRadius: typeof borderRadius;
    }
}
