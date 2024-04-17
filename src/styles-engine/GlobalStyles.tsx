import {Global, GlobalStylesProps} from "@styles-engine/api";

export const GlobalStyles = (props: GlobalStylesProps) => {
  const {styles} = props;
  return <Global styles={styles}/>;
}
