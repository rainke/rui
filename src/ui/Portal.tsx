import React from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  container?: HTMLElement|null|undefined
}
const Portal: React.FC<PortalProps> = props => {
  return ReactDOM.createPortal(props.children, props.container || document.body)
};

export default Portal;
