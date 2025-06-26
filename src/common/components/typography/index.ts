import { type TypographyProps, variantStyles } from "./styles.ts";

import styled, { css } from "styled-components";


const Typography = styled.span<TypographyProps>`
  ${({ variant, color = "whiteDark" }) => {
    return css`
       ${variantStyles[variant]};
      color: ${({ theme }) => theme.colors[color]};
    `
  }};

`;

export default Typography;
