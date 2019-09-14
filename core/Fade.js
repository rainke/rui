var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import cx from 'clsx';
import { Transition } from 'react-transition-group';
const Fade = (_a) => {
    var { children, in: inProps, onEnter, onExit, timeout = 400, className, style } = _a, other = __rest(_a, ["children", "in", "onEnter", "onExit", "timeout", "className", "style"]);
    const handleEnter = (node, isAppearing) => {
        // 重排让动画重新开始 https://css-tricks.com/restart-css-animation/
        void node.scrollTop;
        onEnter && onEnter(node, isAppearing);
    };
    const handleExit = (node) => {
        onExit && onExit(node);
    };
    const fadeStyle = {
        transitionDuration: `${timeout}ms`
    };
    return (React.createElement(Transition, Object.assign({ appear: true, in: inProps, timeout: timeout, onEnter: handleEnter, onExit: handleExit }, other), state => React.isValidElement(children)
        ? React.cloneElement(React.Children.only(children), {
            className: cx(className, children.props.className, `ui-fade ui-fade-${state}`),
            style: Object.assign({}, style, fadeStyle, children.props.style)
        })
        : null));
};
export default Fade;
