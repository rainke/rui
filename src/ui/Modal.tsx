import React, { useState, useEffect } from 'react';
import cx from 'clsx';
import Portal from './Portal';

interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maskClassName?: string;
  contentClassName?: string;
}
const Modal = React.forwardRef<any, ModalProps>(
  (
    {
      children,
      open = false,
      onClose,
      className,
      style,
      maskClassName,
      contentClassName
    },
    ref
  ) => {
    const handleClose = function() {
      onClose && onClose();
    };

    if (!open) {
      return null;
    }
    return (
      <Portal>
        <div className={cx('ui-modal', className)} ref={ref} style={style}>
          <div className={cx('ui-modal-mask', maskClassName)} onClick={handleClose} />
          <div className={cx('ui-modal-content', contentClassName)}>{children}</div>
        </div>
      </Portal>
    );
  }
);

export default Modal;
