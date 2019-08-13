import React from 'react';
// import Theme from './ui/Theme';
import Button from './ui/Button';
import Carousel from './ui/Carousel'

const App: React.FC = () => {
  const ref = React.useRef<any>()
  React.useEffect(() => {
    // console.log(ref);
  })
  return (
    <div className="App">
      <Button ref={ref}>heheh</Button>
      <div>
      {/* <Theme /> */}
      <Carousel>
        <div style={{ backgroundColor: 'red' }}>
          <h1>RED</h1>
        </div>
        <div style={{ backgroundColor: 'green' }}>
          <h1 style={{textAlign: "center"}}>GREEN</h1>
        </div>
        <div style={{ backgroundColor: 'blue' }}>
          <h1 style={{textAlign: "right"}}>BLUE</h1>
        </div>
      </Carousel>
      </div>
    </div>
  );
}

export default App;
