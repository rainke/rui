import React, { useState, useEffect, useRef } from 'react';
import cx from 'clsx';
import Input from './Input';
const Select = React.forwardRef(({ className, style, placeholder, value, children, onChange }, ref) => {
    const [selectValue, setValue] = useState(value);
    const [open, setOpen] = useState(false);
    const handleRef = useRef(null);
    let options = Array.isArray(children) ? children : [children];
    options = options.map(option => React.isValidElement(option) && option.type === Option
        ? React.cloneElement(option, {
            active: option.props.value === selectValue,
            key: option.props.value,
            onClick: (e) => {
                e.stopPropagation();
                setOpen(false);
                setValue(option.props.value);
                onChange && onChange(option.props.value);
            }
        })
        : null);
    const handleOutSide = function (e) {
        const dom = handleRef.current;
        if (dom) {
            if (!dom.contains(e.target)) {
                setOpen(false);
            }
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleOutSide);
        return () => {
            document.removeEventListener('click', handleOutSide);
        };
    }, []);
    const inputOption = options.find(option => React.isValidElement(option) && option.props.value === selectValue);
    const inputValue = inputOption ? inputOption.props.label || inputOption.props.value : '';
    return (React.createElement("div", { className: cx('ui-select', className), style: style, onClick: () => setOpen(!open), ref: handleRef },
        React.createElement(Input, { ref: ref, readOnly: true, placeholder: placeholder, value: inputValue }),
        open ? (React.createElement("div", { className: "ui-select-dropdown" },
            React.createElement("ul", null, options))) : null));
});
export const Option = React.forwardRef(({ className, style, children, active, onClick, label }, ref) => {
    return (React.createElement("li", { className: cx('ui-select-option', { active }, className), style: style, onClick: onClick }, children || label));
});
export default Select;
