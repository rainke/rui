import React from 'react';
import Dialog from './Dialog';
const Confirm = ({ open, onClose, title, message }) => {
    return React.createElement(Dialog, { open: open, onClose: onClose, title: title },
        React.createElement("h1", null, message));
};
export default Confirm;
