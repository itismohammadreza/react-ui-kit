import { ComponentBase } from "@models/data.model";
import { CheckboxProps, CheckboxState } from "@components/Checkbox/CheckboxModel";
import { classNames } from "@styles-engine/api";

export const CheckboxBase: ComponentBase<CheckboxProps, CheckboxState> = (ownerState) => {
  const defaultProps: CheckboxProps = {
    disabled: false,
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
