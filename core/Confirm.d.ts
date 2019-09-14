import React from 'react';
interface ConfirmProps {
    open?: boolean;
    onClose?: () => void;
    onOk?: () => void;
    title?: string;
    message: string;
}
declare const Confirm: React.FC<ConfirmProps>;
export default Confirm;
