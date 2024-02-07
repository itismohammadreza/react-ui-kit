import {ReactNode, useEffect, useRef, useState} from 'react';
import cn from 'classnames';
import {TransitionGroup} from 'react-transition-group';
import {Ripple} from '@components/Ripple';
import {RippleItem, RippleWrapperProps} from "@types/data.model";
import './index.css';

export const RippleWrapper = (props: RippleWrapperProps) => {
  const defaultProps: RippleWrapperProps = {
    component: 'div',
    center: false,
    color: 'currentColor',
    timeout: {
      enter: 500,
      exit: 500,
    },
    ...props
  }

  const {
    className,
    component: Component,
    children,
    color,
    center,
    timeout,
    ...other
  } = defaultProps;

  const element = useRef<HTMLElement>();
  const [rippleArray, setRippleArray] = useState<ReactNode[]>([]);
  const [nextKey, setNextKey] = useState(0);
  let startTimeout: number;
  let startWrapper: (() => void) | null = () => {
  };
  let ignoringMousedown: boolean = false;

  const handleMouseDown = (e) => {
    start(e);
  }

  const handleMouseUp = (e) => {
    stop(e);
  }

  const handleMouseLeave = (e) => {
    stop(e);
  }

  const handleTouchStart = (e) => {
    start(e);
  }

  const handleTouchEnd = (e) => {
    stop(e);
  }

  const handleTouchMove = (e) => {
    stop(e);
  }

  useEffect(() => {
    return () => {
      clearTimeout(startTimeout);
    }
  }, []);

  const start = (e) => {
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
    // calculate coordinates of the ripple
    if (
        center ||
        (e.clientX === 0 && e.clientY === 0) ||
        (!e.clientX && !e.touches)
    ) {
      // place the ripple in the center of the rect
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const clientX = e.clientX ? e.clientX : e.touches[0].clientX;
      const clientY = e.clientY ? e.clientY : e.touches[0].clientY;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    // calculate the size of the ripple
    if (center) {
      rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3);
    } else {
      const sizeX = Math.max(Math.abs((element.current ? element.current.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element.current ? element.current.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    }

    // Execute
    if (e.touches) {
      // delay the ripple effect for touch devices
      // because touchend event always triggers fast enough
      // without the user even noticed the ripple effect
      startWrapper = () => {
        createRipple({rippleX, rippleY, rippleSize, timeout});
      };
      // the timeout can not be too long as it will become laggy
      startTimeout = setTimeout(() => {
        startWrapper();
        startWrapper = null;
      }, 80);
    } else {
      createRipple({rippleX, rippleY, rippleSize, timeout});
    }
  }

  const createRipple = (params: RippleItem) => {
    const {rippleX, rippleY, rippleSize, timeout} = params;
    const newRippleArray: ReactNode[] = [
      ...rippleArray,
      <Ripple
          timeout={timeout}
          color={color}
          key={nextKey}
          rippleX={rippleX}
          rippleY={rippleY}
          rippleSize={rippleSize}
      />
    ];

    setRippleArray(newRippleArray);
    setNextKey(prev => prev + 1);
  }

  const stop = (e) => {
    clearTimeout(startTimeout);

    if (e.type === 'touchend' && startWrapper) {
      // when touchend was triggerd
      // before `createRipple` was fired
      // so we invoke createRipple immediately
      // and schedule for the stop event
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
      // remove the first ripple
      setRippleArray(rippleArray.slice(1))
    }
  }

  return (
      <Component
          ref={element}
          className={cn('rtr-root', className)}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          {...other}>
        {children}
        <TransitionGroup
            component="span"
            enter
            exit>
          {rippleArray}
        </TransitionGroup>
      </Component>
  )
}
