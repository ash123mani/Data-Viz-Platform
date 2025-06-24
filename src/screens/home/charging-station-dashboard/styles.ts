import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    border: ${({ theme }) => `1px solid ${theme.colors.borderColor}`};
    padding: ${({ theme }) => `${theme.spacing.lg}`};
    gap: ${({ theme }) => theme.spacing.xl};
    background-color: ${({ theme }) => theme.colors.blackMedium};
`
