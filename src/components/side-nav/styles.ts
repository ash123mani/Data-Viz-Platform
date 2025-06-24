import styled from "styled-components";

export const Nav = styled.nav`
    padding: ${({ theme }) => theme.spacing.xl};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
`
