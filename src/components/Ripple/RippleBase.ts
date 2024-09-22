import { ComponentBase } from "@models/data.model";
import { RippleInnerProps, RippleInnerState, RippleProps, RippleState } from "@components/Ripple/RippleModel";
import { $classNames } from "@styles-engine/api";

export const RippleInnerBase: ComponentBase<RippleInnerProps, RippleInnerState> = (ownerState) => {
  const {exiting, entering, ...others} = ownerState;
  const defaultProps: RippleInnerProps = {
    // the default props are whatever component receive from parent.
    ...others
  };

  return {
    defaultProps,
    css: {
      root: $classNames(
          'ripple-wrapper',
          {'ripple-exiting': exiting},
      ),
      ink: $classNames(
          'ripple-ink',
          {'ripple-entering': entering}
      )
    }
  }
}

export const RippleBase: ComponentBase<RippleProps, RippleState> = (ownerState) => {
  const defaultProps: RippleProps = {
    center: false,
    color: 'currentColor',
    timeout: {
      enter: 500,
      exit: 500,
    },
    ...ownerState
  }

  return {
    defaultProps,
    css: {
      root: 'ripple-root'
    }
  }
}
