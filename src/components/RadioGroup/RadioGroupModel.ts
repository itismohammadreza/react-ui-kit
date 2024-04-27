import { HTMLAttributes } from "react";
import { ControllerFieldState, RegisterOptions } from "@forms-engine/api";
import { SafeAny } from "@models/data.model";

interface RadioItem {
  label: string;
  value: string;
}

export interface RadioGroupProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  options?: RadioItem[];
  disabled?: boolean;
  name: string;
  validation?: RegisterOptions;
  showError?: boolean;
  defaultValue?: SafeAny;
}

export interface RadioGroupState extends RadioGroupProps {
  fieldState?: ControllerFieldState;
}
