import React from 'react';
import cx from 'clsx';
import Portal from './Portal';
const Modal = React.forwardRef(({ children, open = false, onClose, className, style, maskClassName, contentClassName }, ref) => {
    const handleClose = function () {
        onClose && onClose();
    };
    if (!open) {
        return null;
    }
    return (React.createElement(Portal, null,
        React.createElement("div", { className: cx('ui-modal', className), ref: ref, style: style },
            React.createElement("div", { className: cx('ui-modal-mask', maskClassName), onClick: handleClose }),
            React.createElement("div", { className: cx('ui-modal-content', contentClassName) }, children))));
});
export default Modal;
