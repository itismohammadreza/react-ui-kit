import {isPropValid} from "@styles-engine/api";
import {createStyled} from "@styles-engine/styled";
import {Ripple} from "@components/Ripple";
import {ButtonBase, ButtonProps} from "@components/Button";
import {memo} from "react";
import {CanBeThemed} from "@models/data.model";

const ButtonRoot = createStyled('button', {
  shouldForwardProp: (prop) => isPropValid(prop)
})((props: CanBeThemed<ButtonProps>) => ({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: 'transparent',
      outline: 0,
      border: 0,
      margin: 0,
      cursor: 'pointer',
      userSelect: 'none',
      verticalAlign: 'middle',
      appearance: 'none',
      textDecoration: 'none',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      minWidth: '64px',
      padding: '6px 8px',
      borderRadius: '4px',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      ...(props.variant === 'text' && {
        color: props?.theme?.colors?.primaryBlue,
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: 'rgba(25, 118, 210, 0.04)',
        }
      }),
      ...(props.variant === 'filled' && {
        color: 'rgb(255, 255, 255)',
        backgroundColor: props?.theme?.colors?.primaryBlue,
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: 'rgb(21, 101, 192)',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',
        }
      }),
      ...(props.variant === 'outlined' && {
        border: '1px solid rgba(25, 118, 210, 0.5)',
        color: props?.theme?.colors?.primaryBlue,
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: 'rgba(25, 118, 210, .04)',
          border: '1px solid rgb(25, 118, 210)',
        }
      }),
    })
)

export const Button = memo((props: ButtonProps) => {
  const {css, defaultProps} = ButtonBase(props);
  const {children, icon, label, disableRipple} = defaultProps;

  return (
      <Ripple disabled={disableRipple}>
        <ButtonRoot {...defaultProps} className={css.root}>
          <span className={css.icon}>{icon}</span>
          {label ? <span className={css.label}>{label}</span> : children}
        </ButtonRoot>
      </Ripple>
  )
})
