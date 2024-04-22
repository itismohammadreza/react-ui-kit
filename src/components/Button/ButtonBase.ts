import { ComponentBase } from "@models/data.model";
import { classNames } from "@styles-engine/api";
import { ButtonProps } from "@components/Button/ButtonModel";

export const ButtonBase: ComponentBase<ButtonProps> = (props: ButtonProps) => {
  const defaultProps: ButtonProps = {
    disabled: false,
    iconPos: 'left',
    isLoading: false,
    size: 'medium',
    color: 'primary',
    async: false,
    fullWidth: false,
    type: 'button',
    variant: 'text',
    ...props,
  };
  return {
    defaultProps,
    css: {
      icon: classNames('ui-button-icon', {
        [`ui-button-icon-${defaultProps.iconPos}`]: defaultProps.label
      }),
      loadingIcon: classNames({
        'ui-button-loading-icon': defaultProps.isLoading
      }),
      label: 'ui-button-label',
      root: classNames(
          'ui-button',
          `ui-button-${defaultProps.variant}`,
          `ui-button-${defaultProps.size}`,
          `ui-button-${defaultProps.color}`,
          {
            'ui-button-full': defaultProps.fullWidth,
            'ui-button-icon-only': defaultProps.icon && !defaultProps.label && !defaultProps.children,
            'ui-button-vertical': (defaultProps.iconPos === 'top' || defaultProps.iconPos === 'bottom') && defaultProps.label,
            'ui-button-loading': defaultProps.isLoading,
            'ui-button-async': defaultProps.async,
            'ui-disabled': defaultProps.disabled,
          }
      )
    }
  }
}
