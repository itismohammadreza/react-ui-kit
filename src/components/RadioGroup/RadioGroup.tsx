import { ForwardedRef, forwardRef, memo, useMemo } from "react";
import { RadioGroupProps } from "@components/RadioGroup/RadioGroupModel";
import { RadioGroupBase } from "@components/RadioGroup/RadioGroupBase";
import { createStyled } from "@styles-engine/styled";
import { isPropValid } from "@styles-engine/api";
import { uniqueComponentId } from "@utils/uniqeComponentId";
import { CanBeStyled, CanBeThemed } from "@models/data.model";
import { Radio } from "@components/Radio";
import { withController } from "@forms-engine/withController";

const RadioGroupRoot = createStyled('div', {
  shouldForwardProp: (prop) => isPropValid(prop)
})((props: CanBeThemed<RadioGroupProps>) => ({}));

const PureRadioGroup = forwardRef((props: CanBeStyled<RadioGroupProps>, ref: ForwardedRef<any>) => {
  const {css, label, options, ...other} = props;
  const optionsWithId = useMemo(() => options?.map(option => ({...option, __id__: uniqueComponentId()})) || [], []);

  return (
      <RadioGroupRoot className={css.root}>
        {label && <span className={css.label}>{label}</span>}
        {
          optionsWithId.map(option => {
            return (
                <>
                  <label htmlFor={option.__id__}>{option.label}</label>
                  <Radio
                      key={option.value}
                      ref={ref}
                      className={css.input}
                      inputId={option.__id__}
                      value={option.value}
                      {...other}
                  />
                </>
            )
          })
        }
      </RadioGroupRoot>
  )
})

export const RadioGroup = memo((props: RadioGroupProps) => {
  const {css, defaultProps} = RadioGroupBase(props);
  const Controlled = withController(PureRadioGroup);
  return defaultProps.name ? <Controlled {...defaultProps} css={css}/> : <PureRadioGroup {...defaultProps} css={css}/>
});
