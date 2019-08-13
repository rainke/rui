import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, React.ClassAttributes<HTMLButtonElement> {
  type?: string;
  block?: boolean;
  submit?: true;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, block = false, className, type = 'default', submit = false, ...other }, ref) => {
    const clsn = clsx(className, 'ui-btn', `ui-btn-${type}`, { 'ui-btn-block': block });
    return (
      <button className={clsn} ref={ref} {...other} type={submit ? 'submit' : 'button'}>
        {children}
      </button>
    );
  }
);

export default Button;
