import styled from "styled-components";
import IconButton from "../../common/components/icon-button";
import Icon from "../../common/components/Icon";
import Typography from "../../common/components/typography";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
`

export const CollapseHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

type IconProps = {
    isExpanded: boolean;
}
export const StyledIcon = styled(Icon)<IconProps>`
    transform: ${({ isExpanded }) => isExpanded ? `rotate(-90deg)` : `rotate(0deg)`};
`

export const Title = styled(Typography)`
 color: ${({ theme }) => theme.colors.yellowDark};
    margin-left: ${({ theme }) => theme.spacing.md};
   
`

export const StyledIconButton = styled(IconButton)<IconProps>`
    border-radius: ${({ theme }) => theme.borderRadius.max};
    border: 1px solid ${({ theme }) => theme.colors.yellowLight};
    height: 34px;
    width: 44px;
    transform: ${({ isExpanded }) => isExpanded ? `rotate(-180deg)` : `rotate(0deg)`};
`
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

export const ExpandedContentContainer= styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
`
