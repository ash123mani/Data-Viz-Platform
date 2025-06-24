import styled from "styled-components";
import type { ButtonProps } from "./index.tsx";

interface BtnProps {
    variant: ButtonProps['variant'];
}

export const Btn = styled.button<BtnProps>`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    background-color: ${({ theme, variant }) => {
    if (variant === 'filled') return theme.colors.blackMedium;
    if (variant === 'ghost') return theme.colors.transparent;
  }};
    border: ${({ theme, variant }) => {
    if (variant === 'filled') return `${theme.borderRadius.xxsm} solid ${theme.colors.whiteLight}`;
    if (variant === 'ghost') return `none`;
  }};
    color: ${({ theme }) => theme.colors.whiteDark};
`
