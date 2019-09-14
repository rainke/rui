import React, { useState, useEffect } from 'react';
import Fade from './Fade';
const CarouselItem = React.forwardRef(({ children, active = false }, ref) => {
    return (React.createElement(Fade, { in: active, timeout: 1000, mountOnEnter: true, unmountOnExit: true }, React.cloneElement(children, { ref })));
});
const Carousel = React.forwardRef(({ children }, ref) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const length = children.length;
    const renderEl = () => children.map((child, idx) => {
        const active = activeIndex === idx;
        return (React.createElement(CarouselItem, { active: active, key: idx }, React.cloneElement(child, { style: Object.assign({ zIndex: active ? 10 : 0 }, child.props.style) })));
    });
    const next = () => {
        setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1);
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            next();
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeIndex]);
    return (React.createElement("div", { className: "ui-carousel" },
        renderEl(),
        React.createElement("button", { className: "left" }, "prev"),
        React.createElement("button", { className: "right", onClick: next }, "next")));
});
export default Carousel;
