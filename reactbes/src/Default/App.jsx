import React,{useState} from 'react'

const App = () => {
    const [data, setData] = useState(["Vijay", "hari", "Vishu"]);
  return (
    <div>
      <h1>{data.length} Today's Birthday</h1>
      {data.map((item, index) => {
        return <div key = {item}>{item}</div>;
        })}
        <button onClick={()=> setData([])}>Clear</button>
    </div>
  )
}

export default App
