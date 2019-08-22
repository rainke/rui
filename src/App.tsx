import React from 'react';
import {hot} from 'react-hot-loader';
// import Theme from './ui/Theme';
// import Button from './ui/Button';
// import Carousel from './ui/Carousel'
// import Input from './ui/Input';
// import Select, {Option} from './ui/Select';
import Inotification from './ui/Notification'

const App: React.FC = () => {
  const open = () => {
    Inotification.info('hello');
  }
  return <div>
    <button onClick={() =>open()}>msg</button>
    <Inotification />
  </div>
}

export default hot(module)(App);
