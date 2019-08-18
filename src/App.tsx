import React from 'react';
// import Theme from './ui/Theme';
// import Button from './ui/Button';
// import Carousel from './ui/Carousel'
// import Input from './ui/Input';
// import Select, {Option} from './ui/Select';
import Dialog from './ui/Dialog'

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  return <div>
    <button onClick={() =>setOpen(true)}>toggle {String(open)}</button>
    <Dialog open={open} onClose={() => setOpen(false)}>
      <h1>hello 我是 modal</h1>
    </Dialog>
  </div>
}

export default App;
