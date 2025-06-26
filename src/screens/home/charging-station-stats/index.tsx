import UnsatisfiedDemandChart from "./graph-and-performance-indicators";
import { Container, GraphsContainer, KeyPerformanceCard, KeyPerformanceContainer, StyledCard } from "./styles.ts";
import Typography from "../../../common/components/typography";

export default function ChargingStationStats() {
  return (
    <Container>
      <GraphsContainer>
        <Typography variant="headingMd" />
        <StyledCard>
          <UnsatisfiedDemandChart />
        </StyledCard>
      </GraphsContainer>
      <KeyPerformanceContainer>
        <KeyPerformanceCard>
          <Typography variant="title" as="p">Infrastructure Units</Typography>
          <Typography variant="caption" color="blackLight" as="p">This describes variable two and what the shown data means.</Typography>

        </KeyPerformanceCard>
        <KeyPerformanceCard>
          <Typography variant="title">Infrastructure Units</Typography>
          <Typography variant="caption" color="blackLight" as="p">This describes variable two and what the shown data means.</Typography>
        </KeyPerformanceCard>
        <KeyPerformanceCard>
          <Typography variant="title">Infrastructure Units</Typography>
          <Typography variant="caption" color="blackLight" as="p">This describes variable two and what the shown data means.</Typography>
        </KeyPerformanceCard>
        <KeyPerformanceCard>
          <Typography variant="title">Infrastructure Units</Typography>
          <Typography variant="caption" color="blackLight" as="p">This describes variable two and what the shown data means.</Typography>
        </KeyPerformanceCard>
      </KeyPerformanceContainer>
    </Container>

  )
}
