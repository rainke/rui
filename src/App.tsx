import React from 'react';
// import Theme from './ui/Theme';
// import Button from './ui/Button';
// import Carousel from './ui/Carousel'
import Input from './ui/Input';
import Select, {Option} from './ui/Select';

const App: React.FC = () => {
  const [v, setV] = React.useState('333')
  return <div>
    <Input placeholder="hello boys" disabled/>
    <Select value={v}>
      <Option value="333" label="jack">jack</Option>
      <Option value="444" label="jack2">jack2</Option>
      <div>xxx</div>
    </Select>
  </div>
}

export default App;
