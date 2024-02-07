import {Global} from "@emotion/react";
import {CSSObject} from "@emotion/styled";

export const GlobalStyles = (styles: CSSObject) => {
  return <Global styles={styles}/>;
}
