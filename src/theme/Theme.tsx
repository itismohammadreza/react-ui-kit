import {createContext, useContext} from "react";
import {ThemeProvider as EmotionThemeProvider} from '@emotion/react';

export const ThemeContext = createContext({});

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({children, theme}) => {
  return (
      <EmotionThemeProvider theme={theme}>
        {children}
      </EmotionThemeProvider>
  );
}
