import React from 'react';

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    React.ClassAttributes<HTMLButtonElement> {
  type?: string;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children }, ref) => {
  return <button className="ui-btn" ref={ref}>{children}</button>;
});

export default Button;
