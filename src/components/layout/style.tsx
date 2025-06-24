import styled from "styled-components";

export const Container = styled.main`
    background-color: ${({ theme }) => theme.colors.blackDark};
    height: 100%;
    display: flex;
    flex-direction: row;
`

export const Main = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`
