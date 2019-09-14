import React, { useRef, useEffect, useState } from 'react';
import Portal from './Portal';
import PopperJS from 'popper.js';

const Popover: React.FC<any> = ({ children }) => {
  const ref = useRef<HTMLElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
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
  const trigger = React.cloneElement(children, { onClick: () => {}, ref });
  return (
    <>
      {trigger}

      <Portal>
        <div ref={popperRef} className="popper">
          <span x-arrow=""></span>
        hello
        </div>
      </Portal>
    </>
  );
};

export default Popover;
