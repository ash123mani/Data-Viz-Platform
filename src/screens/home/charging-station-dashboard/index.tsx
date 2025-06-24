import { Content } from "./styles.ts";
import ChargingStationDashboardHeader from "./header";
import BestScenarioResults from "./best-scenario-results";
import SideDrawer from "../../../common/components/side-drawer";
import { useCallback, useState } from "react";

export default function ChargingStationDashboard() {
  const [showEditVariablesDrawer, setShowEditVariablesDrawer] = useState<boolean>(false);

  const handleEditVariablesClick = useCallback(() => {
    setShowEditVariablesDrawer(true);
  }, [])

  const handleEditVariablesClose = useCallback(() => {
    setShowEditVariablesDrawer(false);
  }, [])


  return (
    <Content>
      <ChargingStationDashboardHeader onEditVariablesClick={handleEditVariablesClick} />
      <BestScenarioResults />
      <SideDrawer isOpen={showEditVariablesDrawer} title="Edit Variables" onClose={handleEditVariablesClose} width="600px">Hole</SideDrawer>
    </Content>
  )
}
