import React from 'react';
import Button from './ui/Button';
const App: React.FC = () => {
  const ref = React.useRef<any>()
  React.useEffect(() => {
    console.log(ref);
  })
  return (
    <div className="App">
      <Button ref={ref}>heheh</Button>
    </div>
  );
}

export default App;
