import React, {useState, useEffect} from 'react';
import Portal from './Portal';

interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}
const Modal = React.forwardRef<any, ModalProps>(({ children, open = false, onClose }, ref) => {
  
  const handleClose = function(){
    onClose && onClose();
  }

  if(!open) {
    return null;
  }
  return (
    <Portal>
      <div className="ui-modal" ref={ref}>
        <div className="ui-modal-mask" onClick={handleClose}></div>
        <div className="ui-modal-content">{children}</div>
      </div>
    </Portal>
  );
});

export default Modal;
