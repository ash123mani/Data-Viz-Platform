import 'styled-components';
import { colors } from "./src/common/theme/colors";


declare module 'styled-components' {
    export interface DefaultTheme {
        colors: typeof colors;
    }
}
