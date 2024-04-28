import { HTMLAttributes, ReactNode } from "react";

type ButtonColor = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = 'button' | 'submit' | 'reset';
type ButtonIconPosition = 'left' | 'right' | 'top' | 'bottom';
type ButtonVariant = 'text' | 'filled' | 'outlined' | 'elevated';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  color?: ButtonColor;
  disabled?: boolean;
  disableRipple?: boolean;
  async?: boolean;
  isLoading?: boolean;
  icon?: ReactNode;
  loadingIcon?: ReactNode;
  iconPos?: ButtonIconPosition;
  fullWidth?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  variant?: ButtonVariant;
}

export interface ButtonState extends ButtonProps {
}
