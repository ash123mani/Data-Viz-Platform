import { IconsBox, PillBox } from "./styles.ts";
import Icon from "../../common/components/Icon";
import type { ButtonHTMLAttributes } from "react";

export type PillProps = {
    label: string;
    onPillClick: (pillKey: number | string) => void;
    isSelected: boolean;
    pillKey: number | string;
} &  ButtonHTMLAttributes<HTMLButtonElement>

export default function Pill({ label, onPillClick , isSelected, pillKey, ...rest }:PillProps) {
  return (
    <PillBox  role="button" onClick={() => onPillClick(pillKey)} isSelected={isSelected} {...rest}>
      {label}
      <IconsBox>
        <Icon icon="stars" height="20px" width="20px"/>
        <Icon icon={isSelected ?  "check": "plus"} />
      </IconsBox>
    </PillBox>
  )
}
