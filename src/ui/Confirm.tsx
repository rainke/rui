import React from 'react';
import Dialog from './Dialog';

interface ConfirmProps {
  open?: boolean;
  onClose?: () => void;
  onOk?: () => void;
  title?: string;
  message: string;
}
const Confirm: React.FC<ConfirmProps> = ({open, onClose, title, message}) => {
  return <Dialog open={open} onClose={onClose} title={title}>
    <h1>{message}</h1>
  </Dialog>
};

export default Confirm;
