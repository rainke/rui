import React from 'react';
const Button = React.forwardRef(({ children }, ref) => {
    return React.createElement("button", { className: "ui-btn", ref: ref }, children);
});
export default Button;
