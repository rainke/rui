import React, { useState } from 'react';
import cx from 'clsx';
import Modal from './Modal';
import Fade from './Fade';
import Button from './Button';
// TODO: size

interface DialogTitleProps {
  title?: string;
}
const DialogTitle: React.FC<DialogTitleProps> = ({ title }) => {
  return title ?(
    <header className="ui-dialog-header">
      <h2>{title}</h2>
    </header>
  ): null;
};

interface DialogFooterProps {
  onClose?: () => void;
  onOk?: () => void;
}
const DialogFooter: React.FC<DialogFooterProps> = ({ onClose, onOk }) => {
  return (
    <footer className="ui-dialog-footer">
      <Button onClick={onOk} type="primary">确 定</Button>
      <Button onClick={onClose}>取 消</Button>
    </footer>
  );
};

interface DialogProps {
  open?: boolean;
  onClose?: () => void;
  onOk?: () => void;
  children: React.ReactNode;
  Footer?: React.ComponentType<DialogFooterProps>;
  title?: string;
}
const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  onOk,
  children,
  Footer = DialogFooter,
  title
}) => {
  const [keep, setkeep] = useState(false);
  const entering = () => {
    setkeep(true);
  };
  const exited = () => {
    setkeep(false);
  };
  return (
    <Fade timeout={200} in={open} onEntering={entering} onExited={exited}>
      <Modal
        className="ui-dialog"
        open={open || keep}
        onClose={onClose}
        contentClassName="ui-dialog-content"
      >
        <div>
          <DialogTitle title={title} />
          <section className="ui-dialog-body">{children}</section>
          <Footer onClose={onClose} onOk={onOk} />
        </div>
      </Modal>
    </Fade>
  );
};

export default Dialog;
