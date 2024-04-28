import { HTMLAttributes } from "react";
import { ControllerFieldState, RegisterOptions } from "@forms-engine/api";
import { SafeAny } from "@models/data.model";

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  inputId?: string;
  disabled?: boolean;
  name: string;
  validation?: RegisterOptions;
  showError?: boolean;
  defaultValue?: SafeAny;
}

export interface CheckboxState extends CheckboxProps {
  fieldState?: ControllerFieldState;
}
