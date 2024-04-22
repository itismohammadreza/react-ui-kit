import { ComponentBase } from "@models/data.model";
import { RippleInnerProps, RippleProps } from "@components/Ripple/RippleModel";
import { classNames } from "@styles-engine/api";

export const RippleInnerBase: ComponentBase<RippleInnerProps> = (ownerState: any) => {
  const {exiting, entering, ...others} = ownerState;
  const defaultProps: RippleInnerProps = {
    // the default props are whatever component receive from parent.
    ...others
  };

  return {
    defaultProps,
    css: {
      root: classNames(
          'ripple-wrapper',
          {'ripple-exiting': exiting},
      ),
      ink: classNames(
          'ripple-ink',
          {'ripple-entering': entering}
      )
    }
  }
}

export const RippleBase: ComponentBase<RippleProps> = (ownerState: any) => {
  const {wrapperExiting, rippleEntering, ...others} = ownerState;
  const defaultProps: RippleProps = {
    center: false,
    color: 'currentColor',
    timeout: {
      enter: 500,
      exit: 500,
    },
    ...others
  }

  return {
    defaultProps,
    css: {
      root: 'ripple-root'
    }
  }
}
