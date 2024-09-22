import { GlobalStyles } from "@styles-engine/GlobalStyles";
import { $CSSObject } from "@styles-engine/api";

export const CssBaseline = () => {
  const styles: $CSSObject = {
    ':root': {
      fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
      lineHeight: 1.5,
      fontWeight: 400,
      fontSynthesis: 'none',
      textRendering: 'optimizeLegibility',
      webkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
      WebkitTextSizeAdjust: '100%',
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
    'strong, b': {
      // fontWeight: theme.vars.fontWeight.lg,
    },
    body: {
      margin: 0, // Remove the margin in all browsers.
      // color: theme.vars.palette.text.primary,
      // fontFamily: theme.vars.fontFamily.body,
      // backgroundColor: theme.vars.palette.background.body,
      '@media print': {
        // backgroundColor: theme.vars.palette.common.white,
      },
      '&::backdrop': {
        // backgroundColor: theme.vars.palette.background.backdrop,
      },
    },
  };

  return <GlobalStyles styles={styles}/>
}
