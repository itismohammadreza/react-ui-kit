import { ComponentBase } from "@models/data.model";
import { RadioGroupProps, RadioGroupState } from "@components/RadioGroup/RadioGroupModel";
import { classNames } from "@styles-engine/api";

export const RadioGroupBase: ComponentBase<RadioGroupProps, RadioGroupState> = (ownerState) => {
  const defaultProps: RadioGroupProps = {
    options: [],
    label: '',
    disabled: false,
    validation: {},
    showError: true,
    ...ownerState
  };

  return {
    defaultProps,
    css: {
      root: classNames("ui-input-root", {
        'ui-invalid': ownerState.fieldState?.invalid,
        'ui-touched': ownerState.fieldState?.isTouched,
        'ui-dirty': ownerState.fieldState?.isDirty,
        'ui-validating': ownerState.fieldState?.isValidating,
      }),
      input: "ui-input",
      label: 'ui-input-label',
      clearButton: 'ui-input-clear-button',
      error: 'ui-input-error-message',
    }
  }
}
