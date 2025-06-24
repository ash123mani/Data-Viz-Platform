import Icon from "../../../../common/components/Icon";
import IconButton from "../../../../common/components/icon-button";
import Button from "../../../../common/components/button";
import { Container, GroupBox } from "./styles.ts";
import Typography from "../../../../common/components/typography";

type ChargingStationDashboardHeaderProps = {
    onEditVariablesClick: () => void;
}

export default function ChargingStationDashboardHeader({ onEditVariablesClick }: ChargingStationDashboardHeaderProps) {
  return (
    <Container>
      <GroupBox>
        <Icon icon="thunder" height="30px" width="30px"/>
        <Typography  variant="headingLg">Charging Station</Typography>
      </GroupBox>

      <GroupBox>
        <IconButton icon="upload" variant="filled"  iconProps={{ height: '16px', width: '16px' }} />
        <Button onClick={onEditVariablesClick}><Typography variant="label">Edit Variables</Typography></Button>
        <IconButton icon="refresh" variant="filled"  iconProps={{ height: '16px', width: '16px' }} />
      </GroupBox>
    </Container>
  )
}


