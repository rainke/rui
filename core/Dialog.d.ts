import React from 'react';
interface DialogFooterProps {
    onClose?: () => void;
    onOk?: () => void;
}
interface DialogProps {
    open?: boolean;
    onClose?: () => void;
    onOk?: () => void;
    children: React.ReactNode;
    Footer?: React.ComponentType<DialogFooterProps>;
    title?: string;
}
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
