import React from 'react';
import PopperJS from 'popper.js';
interface PopperProps {
    reference?: Element | PopperJS.ReferenceObject;
    placement?: PopperJS.Placement;
}
declare const Popper: React.FC<PopperProps>;
export default Popper;
