import React, { useState } from 'react';
import Modal from './Modal';
import Fade from './Fade';
import Button from './Button';
const DialogTitle = ({ title }) => {
    return title ? (React.createElement("header", { className: "ui-dialog-header" },
        React.createElement("h2", null, title))) : null;
};
const DialogFooter = ({ onClose, onOk }) => {
    return (React.createElement("footer", { className: "ui-dialog-footer" },
        React.createElement(Button, { onClick: onOk, type: "primary" }, "\u786E \u5B9A"),
        React.createElement(Button, { onClick: onClose }, "\u53D6 \u6D88")));
};
const Dialog = ({ open, onClose, onOk, children, Footer = DialogFooter, title }) => {
    const [keep, setkeep] = useState(false);
    const entering = () => {
        setkeep(true);
    };
    const exited = () => {
        setkeep(false);
    };
    return (React.createElement(Fade, { timeout: 200, in: open, onEntering: entering, onExited: exited },
        React.createElement(Modal, { className: "ui-dialog", open: open || keep, onClose: onClose, contentClassName: "ui-dialog-content" },
            React.createElement("div", null,
                React.createElement(DialogTitle, { title: title }),
                React.createElement("section", { className: "ui-dialog-body" }, children),
                React.createElement(Footer, { onClose: onClose, onOk: onOk })))));
};
export default Dialog;
