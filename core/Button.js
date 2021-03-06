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
import clsx from 'clsx';
const Button = React.forwardRef((_a, ref) => {
    var { children, block = false, className, type = 'default', submit = false } = _a, other = __rest(_a, ["children", "block", "className", "type", "submit"]);
    const clsn = clsx(className, 'ui-btn', `ui-btn-${type}`, { 'ui-btn-block': block });
    return (React.createElement("button", Object.assign({ className: clsn, ref: ref }, other, { type: submit ? 'submit' : 'button' }), children));
});
export default Button;
