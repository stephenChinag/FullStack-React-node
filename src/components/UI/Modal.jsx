import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className }) => {
  const dialog = useRef();
  useEffect((open) => {
    if (open) {
      dialog.current.showModal();
    }
  }, []);
  return createPortal(
    <dialog ref={dialog} open={open} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
