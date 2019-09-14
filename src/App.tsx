import React from 'react';
import {hot} from 'react-hot-loader';
import Popper from './ui/Popper';
import Button from './ui/Button'

const App: React.FC = () => {
  const [node, setNode] = React.useState()
  const toggle = (e: React.MouseEvent) => {
    setNode(node ? null : e.target)
  }
  return <div>
    <Button onClick={toggle}>click</Button>
    <Popper reference={node} placement="right-end">
      hello
    </Popper>
    <p>hhe</p>
  </div>
}

export default hot(module)(App);
