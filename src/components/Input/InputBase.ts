import {ComponentBase} from "@models/data.model";
import {InputProps} from "@components/Input/InputModel";
import {classNames} from "@styles-engine/api";

export const InputBase: ComponentBase<InputProps> = (ownerState: InputProps) => {
  const defaultProps: InputProps = {
    label: '',
    inputId: '',
    disabled: false,
    placeholder: '',
    showClearButton: false,
    name: '',
    validation: {},
    showError: true,
    ...ownerState
  };

  return {
    defaultProps,
    css: {
      root: classNames("ui-input-root", {clearable: defaultProps.showClearButton}),
      label: 'ui-input-label',
      clearButton: 'ui-input-clear-button',
      error: 'ui-input-error-message',
    }
  }
}
