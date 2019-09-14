import React, { useRef, useEffect, useState } from 'react';
import Portal from './Portal';
import PopperJS from 'popper.js';

interface PopperProps {
  reference?: Element | PopperJS.ReferenceObject;
  placement?: PopperJS.Placement;
}
const Popper: React.FC<PopperProps> = ({
  children,
  reference,
  placement = 'bottom'
}) => {
  const popperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!reference || !popperRef.current) {
      return;
    }
    const popper = new PopperJS(reference, popperRef.current, {
      placement
    });
    return () => {
      popper.destroy();
    };
  }, [reference]);
  if (!reference) {
    return null;
  }
  return (
    <Portal>
      <div
        ref={popperRef}
        className="ui-popper"
        role="tooltip"
        style={{ position: 'fixed' }}
      >
        {children}
        <span x-arrow="" />
      </div>
    </Portal>
  );
};

export default Popper;
