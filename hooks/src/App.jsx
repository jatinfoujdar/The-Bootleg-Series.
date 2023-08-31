import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };
  const minusValue = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Hello</h1>
      <h2>Counter: {count}</h2>

      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={minusValue}>Minus</button>
    </>
  );
}

export default App;
