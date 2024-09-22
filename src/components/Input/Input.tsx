import { ForwardedRef, forwardRef, memo, useRef } from "react";
import { InputProps } from "@components/Input/InputModel";
import { InputBase } from "@components/Input/InputBase";
import { createStyled } from "@styles-engine/styled";
import { $isPropValid } from "@styles-engine/api";
import { uniqueComponentId } from "@utils/uniqeComponentId";
import { CanBeStyled, CanBeThemed } from "@models/data.model";
import { withController } from "@forms-engine/withController";

const InputRoot = createStyled('label', {
  shouldForwardProp: (prop) => $isPropValid(prop)
})((props: CanBeThemed<InputProps>) => ({}));

const PureInput = forwardRef((props: CanBeStyled<InputProps>, ref: ForwardedRef<any>) => {
  const {inputId, css, label, ...other} = props;
  const inputIdRef = useRef(inputId || uniqueComponentId());

  return (
      <InputRoot className={css.root} htmlFor={inputIdRef.current}>
        {label && <span className={css.label}>{label}</span>}
        <input
            ref={ref}
            type="text"
            className={css.input}
            id={inputIdRef.current}
            {...other}
        />
      </InputRoot>
  )
})

export const Input = memo((props: InputProps) => {
  const {css, defaultProps} = InputBase(props);
  const Controlled = withController(PureInput);
  return defaultProps.name ? <Controlled {...defaultProps} css={css}/> : <PureInput {...defaultProps} css={css}/>
});
