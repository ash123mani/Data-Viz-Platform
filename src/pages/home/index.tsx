import Header from "../../screens/home/header";
import ChargingStationDashboard from "../../screens/home/charging-station-dashboard";
import ChargingStationStats from "../../screens/home/charging-station-stats";
import { Card } from "../../shared/card";

function Root() {
  return (
    <>
      <Header />
      <Card>
        <ChargingStationDashboard />
        <ChargingStationStats />
      </Card>

    </>
  )
}

export default Root;
