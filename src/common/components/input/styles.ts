import styled from "styled-components";

export const StyledInput = styled.input`
    padding: ${({ theme }) => theme.spacing.sm};
    background: ${({ theme }) => theme.colors.transparent};
    color: ${({ theme }) => theme.colors.whiteDark};
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    outline: none;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
`
