import { ComponentBase } from "@models/data.model";
import { RadioProps, RadioState } from "@components/Radio/RadioModel";
import { classNames } from "@styles-engine/api";

export const RadioBase: ComponentBase<RadioProps, RadioState> = (ownerState) => {
  const defaultProps: RadioProps = {
    disabled: false,
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
