import styled from "styled-components";

export  const Card = styled.div`
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    border-radius: ${(props) => props.theme.borderRadius.md};
    padding: ${(props) => props.theme.spacing.md};
`
