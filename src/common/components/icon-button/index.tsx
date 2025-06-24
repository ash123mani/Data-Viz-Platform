import type { ButtonHTMLAttributes } from "react";


import Icon, { type IconProps } from "../Icon";
import type { IconType } from "../Icon/action-icons";
import { Btn } from "./styles.ts";

export type IconButtonProps = {
    icon: IconType;
    variant?: 'filled' | 'ghost';
    iconProps?: {
        height?: IconProps["height"];
        width?: IconProps["width"];
        alt?: IconProps["alt"];
    }
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function IconButton({ icon, variant = "filled", iconProps, ...rest }: IconButtonProps) {
  return (
    <Btn variant={variant} {...rest}>
      <Icon  {...iconProps} icon={icon} />
    </Btn>
  )
}
