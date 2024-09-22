import { useState } from "react";
import { $Transition } from "@styles-engine/api";
import { RippleInnerProps } from "@components/Ripple";
import { RippleInnerBase } from "@components/Ripple/RippleBase";
import { createStyled } from "@styles-engine/styled";
import { keyframes } from "@emotion/react";
import { SafeAny } from "@models/data.model";

const rippleEnter = keyframes({
  '0%': {
    transform: 'scale(0)'
  },
  '100%': {
    transform: 'scale(1)'
  }
});

const rippleExit = keyframes({
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
});

const RippleInnerRoot = createStyled('span')(({
                                                entering,
                                                exiting,
                                                timeout,
                                                rippleSize,
                                                rippleX,
                                                rippleY,
                                                color
                                              }: SafeAny) => ({
  display: 'block',
  opacity: 1,
  pointerEvents: 'none',
  animationDuration: `${timeout!.exit}ms`,
  ...exiting && {
    opacity: 0,
    animation: `${rippleExit} 500ms cubic-bezier(0.4, 0, 0.2, 1)`
  },
  '& > span': {
    position: 'absolute',
    borderRadius: '50%',
    opacity: '0',
    width: rippleSize,
    height: rippleSize,
    top: rippleY - (rippleSize / 2),
    left: rippleX - (rippleSize / 2),
    backgroundColor: color,
    animationDuration: `${timeout!.enter}ms`,
    ...(entering && {
      opacity: 0.3,
      transform: 'scale(1)',
      animation: `${rippleEnter} 500ms cubic-bezier(0.4, 0, 0.2, 1)`
    })
  }
}));

export const RippleInner = (props: RippleInnerProps) => {
  const [entering, setEntering] = useState(false);
  const [exiting, setExiting] = useState(false);
  const {css, defaultProps} = RippleInnerBase({entering, exiting, ...props});
  const {
    rippleX,
    rippleY,
    rippleSize,
    color,
    timeout,
    ...other
  } = defaultProps;

  return (
      <$Transition
          onEnter={() => {
            setEntering(true)
          }}
          onExit={() => {
            setExiting(true)
          }}
          timeout={timeout}
          {...other}>
        <RippleInnerRoot
            className={css.root}
            entering={entering}
            exiting={exiting}
            timeout={timeout}
            rippleSize={rippleSize}
            rippleX={rippleX}
            rippleY={rippleY}
            color={color}>
          <span className={css.ink}/>
        </RippleInnerRoot>
      </$Transition>
  )
}
