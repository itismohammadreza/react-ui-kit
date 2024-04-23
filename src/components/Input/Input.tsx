import { memo, useRef } from "react";
import { InputProps } from "@components/Input/InputModel";
import { Controller, useFormContext, useWatch } from "@forms-engine/api";
import { InputBase } from "@components/Input/InputBase";
import { createStyled } from "@styles-engine/styled";
import { isPropValid } from "@styles-engine/api";
import { uniqueComponentId } from "@utils/uniqeComponentId";
import { CanBeThemed } from "@models/data.model";

const InputRoot = createStyled('label', {
  shouldForwardProp: (prop) => isPropValid(prop)
})((props: CanBeThemed<InputProps>) => ({}));

export const Input = memo((props: InputProps) => {
  const methods = useFormContext();
  const {css, defaultProps} = InputBase({...props, fieldState: methods?.getFieldState(props.name!)});
  const {
    label,
    name,
    validation,
    showError,
    defaultValue,
    inputId,
    ...other
  } = defaultProps;
  const inputIdRef = useRef(inputId || uniqueComponentId());
  const PureInput = (
      <InputRoot className={css.root} htmlFor={inputIdRef.current}>
        {label && <span className={css.label}>{label}</span>}
        <input
            type="text"
            className={css.input}
            id={inputIdRef.current}
            defaultValue={defaultValue}
            {...methods?.register(name!, validation)}
            {...other}
        />
      </InputRoot>
  );

  useWatch({name: name!});

  return methods && name ? (
      <Controller
          name={name}
          control={methods.control}
          defaultValue={defaultValue}
          rules={validation}
          render={({fieldState: {error}}) => {
            return (
                <>
                  {PureInput}
                  {showError && (
                      <span className={css.error}>{error?.message}</span>
                  )}
                </>
            )
          }}
      />
  ) : (
      <>{PureInput}</>
  );
});
