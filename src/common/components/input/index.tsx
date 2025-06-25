import { StyledInput } from "./styles.ts";
import type { InputHTMLAttributes } from "react";

export default function Input(props :InputHTMLAttributes<HTMLInputElement>) {
  return (
    <StyledInput {...props} />
  )
}
