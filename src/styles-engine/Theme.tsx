import {createContext, useContext} from "react";
import {ThemeProvider as EmotionThemeProvider, ThemeProviderProps} from "@styles-engine/api";

export const ThemeContext = createContext({});

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const {children, theme} = props;

  return (
      <EmotionThemeProvider theme={theme}>
        {children}
      </EmotionThemeProvider>
  );
}
