import { Controller, useFormContext, useWatch } from "@forms-engine/api.ts";
import { $classNames } from "@styles-engine/api";
import { JSXElementConstructor } from "react";
import { CanBeStyled, FormControl } from "@models/data.model";

export const withController = (Component: JSXElementConstructor<CanBeStyled<FormControl>>) => {
  return (props: CanBeStyled<FormControl>) => {
    const {register, getFieldState, control} = useFormContext();
    const {name, validation, showError, defaultValue} = props;
    if (!name) {
      console.warn("Please specify a name for control!")
    }
    const fieldState = getFieldState(name);
    useWatch({name});

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={validation}
            render={({fieldState: {error}}) => (
                <>
                  <Component
                      className={
                        $classNames({
                          'ui-invalid': fieldState?.invalid,
                          'ui-touched': fieldState?.isTouched,
                          'ui-dirty': fieldState?.isDirty,
                          'ui-validating': fieldState?.isValidating,
                        })
                      }
                      {...props}
                      {...register(name)} />
                  {showError && <span className={props.css?.error}>{error?.message}</span>}
                </>
            )}
        />
    );
  };
};
