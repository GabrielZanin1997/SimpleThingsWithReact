import React, { useState } from 'react';
import './app.css';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <div>
        <h1>Count: {count}</h1>
      </div>
      <button onClick={() => setCount(prev => prev + 1)}>ADD</button>
      <button id="sub" onClick={() => setCount(prev => prev - 1)}>SUB</button>
      <button id="reset" onClick ={() => setCount(0)}>Reset</button>
    </>
    );
}

export default App;
