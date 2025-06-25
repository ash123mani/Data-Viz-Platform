import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
`

export const ActionBtns = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: ${({ theme }) => theme.spacing.xl};
`

