import { ForwardedRef, forwardRef, memo, useRef } from "react";
import { TextareaProps } from "@components/Textarea/TextareaModel";
import { TextareaBase } from "@components/Textarea/TextareaBase";
import { createStyled } from "@styles-engine/styled";
import { isPropValid } from "@styles-engine/api";
import { uniqueComponentId } from "@utils/uniqeComponentId";
import { CanBeStyled, CanBeThemed } from "@models/data.model";
import { withController } from "@forms-engine/withController.tsx";

const TextareaRoot = createStyled('label', {
  shouldForwardProp: (prop) => isPropValid(prop)
})((props: CanBeThemed<TextareaProps>) => ({}));

const PureTextarea = forwardRef((props: CanBeStyled<TextareaProps>, ref: ForwardedRef<any>) => {
  const {inputId, css, label, ...other} = props;
  const inputIdRef = useRef(inputId || uniqueComponentId());

  return (
      <TextareaRoot className={css.root} htmlFor={inputIdRef.current}>
        {label && <span className={css.label}>{label}</span>}
        <textarea
            ref={ref}
            className={css.input}
            id={inputIdRef.current}
            {...other}
        />
      </TextareaRoot>
  )
})

export const Textarea = memo((props: TextareaProps) => {
  const {css, defaultProps} = TextareaBase(props);
  const Controlled = withController(PureTextarea);
  return defaultProps.name ? <Controlled {...defaultProps} css={css}/> : <PureTextarea {...defaultProps} css={css}/>
});
