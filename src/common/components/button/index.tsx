import type { ButtonHTMLAttributes, ReactNode } from "react";

import { Btn } from "./styles.ts";

export type ButtonProps = {
    variant?: 'filled' | 'outlined' | 'ghost';
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ variant = "filled", children, ...rest }: ButtonProps) {
  return (
    <Btn variant={variant} {...rest}>
      {children}
    </Btn>
  )
}
