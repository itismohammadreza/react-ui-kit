import ReactDOM from 'react-dom';
import {memo, useEffect, useState} from "react";
import DomHandler from "@utils/DomHandler.ts";
import {ObjectUtils} from "@utils/ObjectUtils.ts";

export const Portal = memo((props: any) => {
  const [mountedState, setMountedState] = useState(props.visible && DomHandler.isClient());

  useEffect(() => {
    if (DomHandler.isClient() && !mountedState) {
      setMountedState(true);
      props.onMounted && props.onMounted();
    }
  });

  useEffect(() => {
    props.onMounted && props.onMounted();
  }, [mountedState]);

  useEffect(() => {
    props.onUnmounted && props.onUnmounted();
  });

  const element = props.element || props.children;

  if (element && mountedState) {
    let appendTo = props.appendTo || document.body;

    if (ObjectUtils.isFunction(appendTo)) {
      appendTo = appendTo();
    }

    if (!appendTo) {
      appendTo = document.body;
    }

    return appendTo === 'self' ? element : ReactDOM.createPortal(element, appendTo);
  }

  return null;
});
