import { ForwardedRef, forwardRef, memo } from "react";
import { RadioProps } from "@components/Radio/RadioModel";
import { RadioBase } from "@components/Radio/RadioBase";
import { createStyled } from "@styles-engine/styled";
import { isPropValid } from "@styles-engine/api";
import { CanBeStyled, CanBeThemed } from "@models/data.model";

const RadioRoot = createStyled('span', {
  shouldForwardProp: (prop) => isPropValid(prop)
})((props: CanBeThemed<RadioProps>) => ({}));

const PureRadio = forwardRef((props: CanBeStyled<RadioProps>, ref: ForwardedRef<any>) => {
  const {inputId, css, ...other} = props;

  return (
      <RadioRoot className={css.root}>
        <input
            ref={ref}
            type="radio"
            className={css.input}
            id={inputId}
            {...other}
        />
      </RadioRoot>
  )
})

export const Radio = memo(forwardRef((props: RadioProps, ref: ForwardedRef<any>) => {
  const {css, defaultProps} = RadioBase(props);
  return <PureRadio ref={ref} {...defaultProps} css={css}/>
}));
