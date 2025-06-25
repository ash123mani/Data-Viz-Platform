import type { ButtonHTMLAttributes, ReactNode } from "react";

import { Btn } from "./styles.ts";
import { useFormStatus } from "react-dom";

export type ButtonProps = {
    variant?: 'filled' | 'outlined' | 'ghost';
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ variant = "filled", children, ...rest }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Btn variant={variant} {...rest} disabled={pending}>
      {pending  ? '..Submitting' : children}
    </Btn>
  )
}
