import cn from 'classnames';
import {Transition} from 'react-transition-group';
import {useState} from "react";
import {RippleProps} from "@types/data.model";

export const Ripple = (props: RippleProps) => {
  const [rippleEntering, setRippleEntering] = useState(false);
  const [wrapperExiting, setWrapperExiting] = useState(false);

  const handleEnter = () => {
    setRippleEntering(true)
  }

  const handleExit = () => {
    setWrapperExiting(true)
  }

  const {
    className,
    rippleX,
    rippleY,
    rippleSize,
    color,
    timeout,
    ...other
  } = props;

  return (
      <Transition onEnter={handleEnter} onExit={handleExit} timeout={timeout} {...other}>
                <span className={cn(
                    'rtr-ripple-wrapper',
                    {'rtr-ripple-wrapper-exiting': wrapperExiting},
                    className)}
                      style={{animationDuration: `${timeout.exit}ms`}}>
                    <span className={cn(
                        'rtr-ripple',
                        {'rtr-ripple-entering': rippleEntering})}
                          style={{
                            width: rippleSize,
                            height: rippleSize,
                            top: rippleY - (rippleSize / 2),
                            left: rippleX - (rippleSize / 2),
                            backgroundColor: color,
                            animationDuration: `${timeout.enter}ms`
                          }}
                    />
                </span>
      </Transition>
  )
}
