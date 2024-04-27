import { ReactElement } from "react";
import { UseFormProps } from "@forms-engine/api";
import { Theme } from "@styles-engine/api";

export type ComponentBase<PropType, StateType> = (...ownerState: StateType[]) => {
  defaultProps: PropType;
  css: Record<string, string>;
}

export type Nullable<T = void> = T | null | undefined;

export type SafeAny = any;

export interface FormHandlerProps<T> extends UseFormProps {
  children: ReactElement | ((args: SafeAny) => ReactElement);
  onSubmit: (data: T) => SafeAny;
  formId?: string;
}

export interface DefaultTheme extends Theme {
  colors: SafeAny;
}

export type CanBeThemed<T> = { [key in keyof T]?: T[key] } & { theme?: DefaultTheme };
export type CanBeStyled<T> = { [key in keyof T]?: T[key] } & { css?: any };

