import styled, { css } from "styled-components";
import Button from "../../common/components/button";

type PillProps = {
    isSelected: boolean;
}

export const PillBox = styled(Button)<PillProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    min-height: 36px;
     padding: ${({ theme }) =>  `${theme.spacing.sm} ${theme.spacing.md}`};
    border-radius: ${({ theme }) => theme.borderRadius.max};
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    color: ${({ theme }) => theme.colors.whiteDark};
    cursor: pointer;
    
    &:hover  {
        border-color: ${({ theme }) => theme.colors.yellowMedium};
    }
    &:hover > span {
        color: ${({ theme }) => theme.colors.yellowDark};
    }
    
    ${({ isSelected }) => {
    if (isSelected) {
      return css`
            border-color: ${({ theme }) => theme.colors.yellowDark};
          color: ${({ theme }) => theme.colors.yellowDark};
        `
    }
  }}
`

export const IconsBox = styled.div`
     display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.sm};
    margin-left: ${({ theme }) => theme.spacing.lg};
`
