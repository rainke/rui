import ReactDOM from 'react-dom';
const Portal = props => {
    return ReactDOM.createPortal(props.children, props.container || document.body);
};
export default Portal;
