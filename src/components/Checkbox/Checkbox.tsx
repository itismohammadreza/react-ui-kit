import { ForwardedRef, forwardRef, memo } from "react";
import { CheckboxProps } from "@components/Checkbox/CheckboxModel";
import { CheckboxBase } from "@components/Checkbox/CheckboxBase";
import { createStyled } from "@styles-engine/styled";
import { isPropValid } from "@styles-engine/api";
import { CanBeStyled, CanBeThemed } from "@models/data.model";
import { withController } from "@forms-engine/withController.tsx";

const CheckboxRoot = createStyled('span', {
  shouldForwardProp: (prop) => isPropValid(prop)
})((props: CanBeThemed<CheckboxProps>) => ({}));

const PureCheckbox = forwardRef((props: CanBeStyled<CheckboxProps>, ref: ForwardedRef<any>) => {
  const {inputId, css, ...other} = props;

  return (
      <CheckboxRoot className={css.root}>
        <input
            ref={ref}
            type="checkbox"
            className={css.input}
            id={inputId}
            {...other}
        />
      </CheckboxRoot>
  )
})

export const Checkbox = memo((props: CheckboxProps) => {
  const {css, defaultProps} = CheckboxBase(props);
  const Controlled = withController(PureCheckbox);
  return defaultProps.name ? <Controlled {...defaultProps} css={css}/> : <PureCheckbox {...defaultProps} css={css}/>
});
