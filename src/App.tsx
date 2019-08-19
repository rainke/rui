import React from 'react';
import {hot} from 'react-hot-loader';
// import Theme from './ui/Theme';
// import Button from './ui/Button';
// import Carousel from './ui/Carousel'
// import Input from './ui/Input';
// import Select, {Option} from './ui/Select';
import Notification, {message} from './ui/Notification'

const App: React.FC = () => {
  const open = () => {
    message({
      type: 'info',
      title: 'hello'
    });
  }
  return <div>
    <button onClick={() =>open()}>msg</button>
    <Notification />
  </div>
}

export default hot(module)(App);
