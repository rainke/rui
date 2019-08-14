import React from 'react';
import cx from 'clsx';
import { Transition } from 'react-transition-group';
import { TransitionProps } from 'react-transition-group/Transition';

interface FadeProps extends TransitionProps {}

const Fade: React.FC<FadeProps> = ({
  children,
  in: inProps,
  onEnter,
  onExit,
  timeout = 400,
  className,
  style,
  ...other
}) => {
  const handleEnter = (node: HTMLElement, isAppearing: boolean) => {
    // 重排让动画重新开始 https://css-tricks.com/restart-css-animation/
    void node.scrollTop;
    onEnter && onEnter(node, isAppearing);
  };

  const handleExit = (node: HTMLElement) => {
    onExit && onExit(node);
  };

  return (
    <Transition appear in={inProps} timeout={timeout} onEnter={handleEnter} onExit={handleExit} {...other}>
      {state =>
        React.isValidElement(children)
          ? React.cloneElement(React.Children.only(children), {
              className: cx(className, children.props.className, `ui-fade ui-fade-${state}`),
              style: {
                ...style,
                ...children.props.style
              }
            })
          : null
      }
    </Transition>
  );
};

export default Fade;
