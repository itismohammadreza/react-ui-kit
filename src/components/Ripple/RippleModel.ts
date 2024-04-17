import {ReactNode} from "react";

interface RippleTimeout {
  enter: number;
  exit: number;
}

export interface RippleInnerProps {
  color: string;
  rippleX: number;
  rippleY: number;
  rippleSize: number;
  timeout: RippleTimeout;
}

export interface RippleProps {
  color?: string;
  timeout?: RippleTimeout;
  center?: boolean;
  disabled?: boolean;
  children: ReactNode;
}

export type RippleItem = Exclude<RippleInnerProps, 'color'>;
