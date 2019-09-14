import React from 'react';
import Button from '../../../src/ui/Button';
import RawButton from '!!raw-loader!../../../src/ui/Button'
import '../../../css/index.css';

console.log(RawButton)

const Index: React.FC = () => (
  <div>
    <Button>hello world</Button>
    <Button type="primary">hello world</Button>
    <Button block>hello world</Button>
    <Button type="primary" block>
      hello world
    </Button>
  </div>
);
export default Index;
