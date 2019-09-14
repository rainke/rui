import React, { useRef, useEffect } from 'react';
import Portal from './Portal';
import PopperJS from 'popper.js';
const Popper = ({ children, reference, placement = 'bottom' }) => {
    const popperRef = useRef(null);
    useEffect(() => {
        if (!reference || !popperRef.current) {
            return;
        }
        const popper = new PopperJS(reference, popperRef.current, {
            placement
        });
        return () => {
            popper.destroy();
        };
    }, [reference]);
    if (!reference) {
        return null;
    }
    return (React.createElement(Portal, null,
        React.createElement("div", { ref: popperRef, className: "ui-popper", role: "tooltip", style: { position: 'fixed' } },
            children,
            React.createElement("span", { "x-arrow": "" }))));
};
export default Popper;
