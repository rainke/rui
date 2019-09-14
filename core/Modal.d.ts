import React from 'react';
interface ModalProps {
    open?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    maskClassName?: string;
    contentClassName?: string;
}
declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<any>>;
export default Modal;
