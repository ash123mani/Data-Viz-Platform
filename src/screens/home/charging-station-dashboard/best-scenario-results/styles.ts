import styled from "styled-components";

import Typography from "../../../../common/components/typography";

export const AlertBox = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.yellowLight};
    border-radius: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AlertText = styled(Typography)`
    color: ${({ theme }) => theme.colors.yellowMedium};
`


