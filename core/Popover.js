import React, { useRef, useEffect } from 'react';
import Portal from './Portal';
import PopperJS from 'popper.js';
const Popover = ({ children }) => {
    const ref = useRef(null);
    const popperRef = useRef(null);
    useEffect(() => {
        if (!ref.current || !popperRef.current) {
            return;
        }
        const popper = new PopperJS(ref.current, popperRef.current, {
            placement: 'right'
        });
        return () => {
            popper.destroy();
        };
    }, []);
    const trigger = React.cloneElement(children, { onClick: () => { }, ref });
    return (React.createElement(React.Fragment, null,
        trigger,
        React.createElement(Portal, null,
            React.createElement("div", { ref: popperRef, className: "popper" },
                React.createElement("span", { "x-arrow": "" }),
                "hello"))));
};
export default Popover;
