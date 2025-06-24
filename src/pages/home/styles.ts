import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
`

export const Content = styled.div`
    flex: 1;
    border: ${({ theme }) => `1px solid ${theme.colors.borderColor}`};
`
