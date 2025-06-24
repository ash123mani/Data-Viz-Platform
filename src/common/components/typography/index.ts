import { type TypographyProps, variantStyles } from "./styles.ts";

import styled from "styled-components";


const Typography = styled.span<TypographyProps>`
  ${({ variant }) => variantStyles[variant]}
`;

export default Typography;
