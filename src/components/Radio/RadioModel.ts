import { HTMLAttributes } from "react";
import { ControllerFieldState } from "@forms-engine/api";

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  inputId?: string;
  disabled?: boolean;
  name?: string;
  value: string;
}


export interface RadioState extends RadioProps {
  fieldState?: ControllerFieldState;
}
