import styled from "styled-components";

export const VariableCategory = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`

export const VariablesBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.sm};
    flex-wrap: wrap;
    align-items: center;
`
