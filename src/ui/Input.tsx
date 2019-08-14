import React from 'react';
import cx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, React.ClassAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, style, placeholder, ...other }, ref) => {
  return (
    <div className={cx('ui-input', className)} style={style}>
      <input type="text" ref={ref} placeholder={placeholder} {...other}/>
    </div>
  );
});

export default Input;
