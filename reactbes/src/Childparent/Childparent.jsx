import React, { createContext } from 'react'
import Child1 from './Child3';

const data1 = createContext();
const data2 = createContext();

const App = () => {
  const name = "Ankit";
  const place = "India";

  return (
    <div>
      <data1.Provider value={name}>
        <data2.Provider value={place}>
          <Child1/>
        </data2.Provider>
        </data1.Provider>
    </div>
  )
}

export default App
export {data1, data2};
