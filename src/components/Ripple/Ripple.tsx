import {memo, MouseEvent, ReactNode, useEffect, useRef, useState} from 'react';
import {TransitionGroup} from "@styles-engine/api";
import {RippleInner, RippleItem, RippleProps} from "@components/Ripple";
import {RippleBase} from "@components/Ripple/RippleBase";
import {createStyled} from "@styles-engine/styled";
import {Nullable} from "@models/data.model";

const RippleRoot = createStyled('div')({
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden'
});

export const Ripple = memo((props: RippleProps) => {
  const {css, defaultProps} = RippleBase(props);
  const {
    children,
    color,
    center,
    timeout,
    disabled,
  } = defaultProps;
  const element = useRef<HTMLDivElement>(null);
  const [rippleArray, setRippleArray] = useState<ReactNode[]>([]);
  const [nextKey, setNextKey] = useState(0);
  let ignoringMousedown: boolean = false;
  let startTimeout: number;
  let startWrapper: Nullable<VoidFunction> = () => {
  };

  useEffect(() => {
    return () => {
      clearTimeout(startTimeout);
    }
  }, []);

  const createRipple = (params: RippleItem) => {
    const {rippleX, rippleY, rippleSize, timeout} = params;
    const newRippleArray: ReactNode[] = [
      ...rippleArray,
      <RippleInner
          timeout={timeout}
          color={color!}
          key={nextKey}
          rippleX={rippleX}
          rippleY={rippleY}
          rippleSize={rippleSize}
      />
    ];

    setRippleArray(newRippleArray);
    setNextKey(prev => prev + 1);
  }

  const start = (e: MouseEvent & TouchEvent) => {
    if (disabled) {
      stop(e);
      return;
    }

    if (e.type === 'mousedown' && ignoringMousedown) {
      ignoringMousedown = false;
      return;
    }
    if (e.type === 'touchstart') {
      ignoringMousedown = true;
    }

    const rect = element.current
        ? element.current.getBoundingClientRect()
        : {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0,
        };

    let rippleX: number;
    let rippleY: number;
    let rippleSize: number;
    if (
        center ||
        (e.clientX === 0 && e.clientY === 0) ||
        (!e.clientX && !e.touches)
    ) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const clientX = e.clientX ? e.clientX : e.touches[0].clientX;
      const clientY = e.clientY ? e.clientY : e.touches[0].clientY;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (center) {
      rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3);
    } else {
      const sizeX = Math.max(Math.abs((element.current ? element.current.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element.current ? element.current.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    }

    if (e.touches) {
      startWrapper = () => {
        createRipple({rippleX, rippleY, rippleSize, timeout});
      };
      startTimeout = setTimeout(() => {
        startWrapper?.();
        startWrapper = null;
      }, 80);
    } else {
      createRipple({rippleX, rippleY, rippleSize, timeout});
    }
  }

  const stop = (e: MouseEvent & TouchEvent) => {
    clearTimeout(startTimeout);

    if (e.type === 'touchend' && startWrapper) {
      e.persist();
      startWrapper();
      startWrapper = null;
      startTimeout = setTimeout(() => {
        stop(e);
      }, 0);
      return;
    }

    startWrapper = null;

    if (rippleArray && rippleArray.length) {
      setRippleArray(rippleArray.slice(1))
    }
  }

  return (
      disabled
          ?
          <>{children}</>
          :
          <RippleRoot
              ref={element}
              className={css.root}
              onMouseDown={start}
              onTouchStart={start}
              onMouseUp={stop}
              onMouseLeave={stop}
              onTouchEnd={stop}
              onTouchMove={stop}>
            {children}
            <TransitionGroup
                component="span"
                enter
                exit>
              {rippleArray}
            </TransitionGroup>
          </RippleRoot>
  )
})
