import { $Global, $GlobalProps } from "@styles-engine/api";

export const GlobalStyles = (props: $GlobalProps) => {
  const {styles} = props;
  return <$Global styles={styles}/>;
}
