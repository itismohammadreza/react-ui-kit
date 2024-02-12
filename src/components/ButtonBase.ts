import {ButtonProps, ComponentBase} from "@types/data.model";
import classNames from 'classnames';

export const ButtonBase: ComponentBase<ButtonProps> = {
  defaultProps: {
    className: undefined,
    children: undefined,
    disabled: false,
    icon: null,
    iconPos: 'left',
    label: undefined,
    loading: false,
    loadingIcon: null,
    size: 'medium',
    color: 'primary',
    async: false,
    fullWidth: false,
    type: 'button',
    variant: 'text',
  },
  css: {
    classes: {
      icon: () => classNames('ui-button-icon', {
        [`ui-button-icon-${ButtonBase.defaultProps.iconPos}`]: ButtonBase.defaultProps.label
      }),
      loadingIcon: () => classNames({
        'ui-button-loading-icon': ButtonBase.defaultProps.loading
      }),
      label: () => 'ui-button-label',
      root: () => classNames(
          'ui-button',
          `ui-button-${ButtonBase.defaultProps.variant}`,
          `ui-button-${ButtonBase.defaultProps.size}`,
          `ui-button-${ButtonBase.defaultProps.color}`,
          {
            'ui-button-full': ButtonBase.defaultProps.fullWidth,
            'ui-button-icon-only': ButtonBase.defaultProps.icon && !ButtonBase.defaultProps.label && !ButtonBase.defaultProps.children,
            'ui-button-vertical': (ButtonBase.defaultProps.iconPos === 'top' || ButtonBase.defaultProps.iconPos === 'bottom') && ButtonBase.defaultProps.label,
            'ui-button-loading': ButtonBase.defaultProps.loading,
            'ui-button-async': ButtonBase.defaultProps.async,
            'ui-disabled': ButtonBase.defaultProps.disabled,
          })
    }
  }
}
