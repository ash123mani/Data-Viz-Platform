import styled from "styled-components";
import { Card } from "../../../shared/card";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.md};
    margin-top: ${({ theme }) => theme.spacing.xl};
`

export const GraphsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const StyledCard = styled(Card)`
    padding: ${({ theme }) => theme.spacing.lg};
`

export const KeyPerformanceContainer = styled.div`
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.md};
    flex: 1;
`

export const KeyPerformanceCard = styled(Card)`
    width: 240px;
    height: 214px;
    gap: ${({ theme }) => theme.spacing.lg};
`
