import React, { useState, useLayoutEffect } from 'react';

const App = () => {
  const[count, setCount] = useState(0);
  useLayoutEffect(() => {
    document.title = `${count}`;
    }, [count]);
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App
