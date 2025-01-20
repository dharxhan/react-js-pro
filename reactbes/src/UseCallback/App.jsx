import React, {useCallback, useState} from 'react'
import Child from './Child'

const App = () => {
  const [count, setCount] = useState(0);

  const problem = useCallback(() => {}, []);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>i</button>
      <Child problem={problem} />
    </div>
  )
}

export default App
