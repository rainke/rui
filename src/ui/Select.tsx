import React, { useState, useEffect, useRef } from 'react';
import cx from 'clsx';
import Input from './Input';

interface SelectProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => any;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  ({ className, style, placeholder, value, children, onChange }, ref) => {
    const [selectValue, setValue] = useState(value);
    const [open, setOpen] = useState(false);
    const handleRef = useRef<HTMLDivElement>(null);
    let options = Array.isArray(children) ? children : [children];
    options = options.map(option =>
      React.isValidElement(option) && option.type === Option
        ? React.cloneElement(option, {
            active: option.props.value === selectValue,
            key: option.props.value,
            onClick: (e: React.MouseEvent) => {
              e.stopPropagation();
              setOpen(false);
              setValue(option.props.value);
              onChange && onChange(option.props.value);
            }
          })
        : null
    );
    const handleOutSide = function(e: MouseEvent){
      const dom = handleRef.current;
      if(dom) {
        if(!dom.contains(e.target as HTMLElement)) {
          setOpen(false);
        }
      }
    }
    useEffect(() => {
      document.addEventListener('click', handleOutSide);
      return () => {
        document.removeEventListener('click', handleOutSide);
      }
    }, [])
    const inputOption = options.find(
      option => React.isValidElement(option) && option.props.value === selectValue
    ) as React.ReactElement;
    const inputValue = inputOption ? inputOption.props.label || inputOption.props.value : '';
    return (
      <div className={cx('ui-select', className)} style={style} onClick={() => setOpen(!open)} ref={handleRef}>
        <Input ref={ref} readOnly placeholder={placeholder} value={inputValue} />
        {open ? (
          <div className="ui-select-dropdown">
            <ul>{options}</ul>
          </div>
        ) : null}
      </div>
    );
  }
);

interface OptionProps extends React.HTMLAttributes<HTMLLIElement>, React.ClassAttributes<HTMLElement> {
  value: string;
  active?: boolean;
  label?: string;
}
export const Option = React.forwardRef<any, OptionProps>(
  ({ className, style, children, active, onClick, label }, ref) => {
    return (
      <li className={cx('ui-select-option', { active }, className)} style={style} onClick={onClick}>
        { children || label }
      </li>
    );
  }
);


export default Select;
