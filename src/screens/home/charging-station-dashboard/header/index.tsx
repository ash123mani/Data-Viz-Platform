import Icon from "../../../../common/components/Icon";
import IconButton from "../../../../common/components/icon-button";
import Button from "../../../../common/components/button";
import { Container, GroupBox } from "./styles.ts";

export default function ChargingStationDashboardHeader() {
  return (
    <Container>
      <GroupBox>
        <Icon icon="thunder" height="30px" width="30px"/>
        <h1 style={{
          fontFamily: 'Roobert TRIAL',
          fontWeight: 700,
          fontSize: '32px',
          lineHeight: '150%',
          letterSpacing: '0%',
          display: 'inline',
        }}>Charging Station</h1>
      </GroupBox>

      <GroupBox>
        <IconButton icon="upload" variant="filled"  iconProps={{ height: '16px', width: '16px' }} />
        <Button>Edit Variables</Button>
        <IconButton icon="refresh" variant="filled"  iconProps={{ height: '16px', width: '16px' }} />
      </GroupBox>
    </Container>
  )
}


