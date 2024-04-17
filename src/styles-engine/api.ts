import {JSX} from "react";
import cn from 'classnames';
import {
  Theme as EmotionTheme,
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps as EmotionThemeProviderProps
} from "@emotion/react";
import EmotionIsPropValid from "@emotion/is-prop-valid";
import {TransitionGroup as ReactTransitionGroup, Transition as ReactTransition} from "react-transition-group";
import {Global as EmotionGlobal,} from "@emotion/react";
import {CSSObject as EmotionCSSObject} from "@emotion/styled";
import emotionStyled from "@emotion/styled";
import {StyledOptions as EmotionStyledOptions} from "@emotion/styled";
import {GlobalProps as EmotionGlobalProps} from "@emotion/react";

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
