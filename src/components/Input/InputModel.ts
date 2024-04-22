import { HTMLAttributes } from "react";
import { RegisterOptions } from "@forms-engine/api";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  inputId?: string;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
  validation?: RegisterOptions;
  showError?: boolean;
}
