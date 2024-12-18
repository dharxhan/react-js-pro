import React from 'react'
import Child from "./Props/Child";

const App = () => {
  const data1= "Dharshan";
  const data2= "Actor";

  function handleClick() {
    alert("En ri media");
    let body = document.body;
    body.style.backgroundColor = "Black";
    body.style.color = "White";
  }
  return (
    <div>
      <Child name={data1} profession={data2} handleClick={handleClick}/>
    </div>
  );
};

export default App;