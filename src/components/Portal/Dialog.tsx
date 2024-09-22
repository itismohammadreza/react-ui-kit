import {memo, useRef, useState} from "react";
import {$Transition} from "@styles-engine/api.ts";
import {Portal} from "@components/Portal/Portal.tsx";
import './styles.css';

export const Dialog = memo((props: any) => {
  const [visible, setVisible] = useState(props.visible);
  const nodeRef = useRef(null);

  return (
      <Portal>
        <$Transition classNames="dialog" in={props.visible} nodeRef={nodeRef} timeout={300} unmountOnExit>
          <div className="dialog-wrapper" ref={nodeRef}>
            {props.children}
          </div>
        </$Transition>
      </Portal>
  )
});
