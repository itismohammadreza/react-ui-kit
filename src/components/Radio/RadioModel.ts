import { HTMLAttributes } from "react";
import { ControllerFieldState, RegisterOptions } from "@forms-engine/api";
import { SafeAny } from "@models/data.model";

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  inputId?: string;
  disabled?: boolean;
  name?: string;
  value: string;
  defaultValue?: SafeAny;
}


export interface RadioState extends RadioProps {
  fieldState?: ControllerFieldState;
}
