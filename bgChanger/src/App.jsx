import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('skyblue');

  return (
    <div
      className="w-full h-screen durtion-200"
      style={{ backgroundColor: color }}
    >
      <div flex flex-wrap justify-center rounded>
        <div className=" p-4">
          <button onClick={() => setColor('red')} className=" p-4">
            Red
          </button>
          <button onClick={() => setColor('green')} className=" p-4">
            Green
          </button>
          <button onClick={() => setColor('yellow')} className=" p-4">
            yellow
          </button>
          <button onClick={() => setColor('blue')} className=" p-4">
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
