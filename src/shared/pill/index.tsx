import { IconsBox, PillBox } from "./styles.ts";
import Typography from "../../common/components/typography";
import Icon from "../../common/components/Icon";

export type PillProps = {
    label: string;
    onClick: (pillKey: PillProps['pillKey']) => void;
    isSelected: boolean;
    pillKey: string | number;
}

export default function Pill({ label, onClick , isSelected, pillKey }:PillProps) {
  return (
    <PillBox role="button" onClick={() => onClick(pillKey)} isSelected={isSelected}>
      <Typography variant="label" color={isSelected ? "yellowDark": "whiteLight"}>{label}</Typography>
      <IconsBox>
        <Icon icon="stars" height="20px" width="20px"/>
        <Icon icon={isSelected ?  "check": "plus"} />
      </IconsBox>
    </PillBox>
  )
}
