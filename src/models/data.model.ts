import {ReactElement} from "react";
import {UseFormProps} from "@forms-engine/api";
import {Theme} from "@styles-engine/api";

export type ComponentBase<T> = (...ownerState: any[]) => {
  defaultProps: T;
  css: Record<string, string>;
}

export type Nullable<T = void> = T | null | undefined;

export interface FormHandlerProps<T> extends UseFormProps {
  children: ReactElement | ((args: any) => ReactElement);
  onSubmit?: (data: T) => any;
  formId?: string;
}

export interface DefaultTheme extends Theme {
  colors: any;
}

export type CanBeThemed<T> = { [key in keyof T]: T[key] } & { theme?: DefaultTheme };

