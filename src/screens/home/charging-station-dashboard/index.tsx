import { Content } from "./styles.ts";
import ChargingStationDashboardHeader from "./header";
import BestScenarioResults from "./best-scenario-results";

export default function ChargingStationDashboard() {
  return (
    <Content>
      <ChargingStationDashboardHeader />
      <BestScenarioResults />
    </Content>
  )
}
