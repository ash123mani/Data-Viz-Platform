import styled from "styled-components";

type BtnProps = {
    variant?: IconButtonProps["variant"];
}

export const Btn = styled.button<BtnProps>`
    padding: ${({ theme }) => theme.spacing.xs};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background-color: ${({ theme, variant }) => {
    if (variant === 'filled') return theme.colors.blackMedium;
    if (variant === 'ghost') return theme.colors.transparent;
  }};
    border: ${({ theme, variant }) => {
    if (variant === 'filled') return `${theme.borderRadius.xxsm} solid ${theme.colors.whiteLight}`;
    if (variant === 'ghost') return `none`;
  }};
`
