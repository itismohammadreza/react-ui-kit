import { JSX } from "react";
import cn from 'classnames';
import {
  Global as EmotionGlobal,
  GlobalProps as EmotionGlobalProps,
  Theme as EmotionTheme,
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps as EmotionThemeProviderProps
} from "@emotion/react";
import EmotionIsPropValid from "@emotion/is-prop-valid";
import { Transition as ReactTransition, TransitionGroup as ReactTransitionGroup } from "react-transition-group";
import emotionStyled, { CSSObject as EmotionCSSObject, StyledOptions as EmotionStyledOptions } from "@emotion/styled";

export type Theme = EmotionTheme;
export type CSSObject = EmotionCSSObject;
export type ThemeProviderProps = EmotionThemeProviderProps;
export type GlobalStylesProps = EmotionGlobalProps;
export type StyledOptions<T> = EmotionStyledOptions<T>;
export type IntrinsicElements = JSX.IntrinsicElements;
export type StyledTag = keyof IntrinsicElements;
export const classNames = cn;
export const styled = emotionStyled;
export const ThemeProvider = EmotionThemeProvider;
export const isPropValid = EmotionIsPropValid;
export const Transition = ReactTransition;
export const TransitionGroup = ReactTransitionGroup;
export const Global = EmotionGlobal;
