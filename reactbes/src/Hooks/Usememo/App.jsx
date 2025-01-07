import React, {useState, useMemo} from 'react'

const App = () => {

  const [add,setAdd] = useState(0);
  const [sub,setSub] = useState(0);

  let memoizedValue = useMemo(() => {
    console.log("can you see me");
    return add * 2;
  }, [add]);
  return (
    <div>
      <p>Add:{add}</p>
      <p>Sub:{sub}</p>
      <p>Memoized Value:{memoizedValue}</p>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <button onClick={() => setSub(sub - 1)}>Sub</button>
    </div>
  )
}

export default App