import type { ButtonHTMLAttributes } from "react";


import Icon from "../Icon";
import type { IconType } from "../../assets/icons/actions";
import { Btn } from "./styles.ts";

export type IconButtonProps = {
    icon: IconType;
    variant?: 'filled' | 'ghost';
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function IconButton({ icon, variant = "filled",...rest }: IconButtonProps) {
  return (
    <Btn variant={variant} {...rest}>
      <Icon icon={icon} />
    </Btn>
  )
}
