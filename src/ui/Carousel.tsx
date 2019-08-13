import React, { useState, useEffect, useRef } from 'react';
import Fade from './Fade';
import clsx from 'clsx';

interface CarouselItemProps {
  children: React.ReactElement;
  active?: boolean;
}
const CarouselItem = React.forwardRef<any, CarouselItemProps>(({ children, active = false }, ref) => {
  return (
    <Fade in={active} timeout={1000} mountOnEnter unmountOnExit>
      {React.cloneElement(children, { ref })}
    </Fade>
  );
});

interface CarouselProps {
  children: React.ReactElement[];
}
const Carousel = React.forwardRef<any, CarouselProps>(({ children }, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = children.length;
  const renderEl = () =>
    children.map((child, idx) => {
      const active = activeIndex === idx;
      return (
        <CarouselItem active={active} key={idx}>
          {React.cloneElement(child, { style: { zIndex: active ? 10 : 0, ...child.props.style } })}
        </CarouselItem>
      );
    });

  const next = () => {
    setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]);
  return (
    <div className="ui-carousel">
      {renderEl()}
      <button className="left">prev</button>
      <button className="right" onClick={next}>
        next
      </button>
    </div>
  );
});

export default Carousel;
