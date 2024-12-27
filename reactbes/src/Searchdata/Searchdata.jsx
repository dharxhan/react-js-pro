import React, {useState, useEffect} from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const[search, setSearch] = useState('');
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setData(data))
  });
  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} placeholder="Search" />

      {data
        .filter((item, index) => item.title.toLowerCase().includes(search))
        .map((item, index) => {
          return (
            <div key={index}>
              <p>{item.title}</p>
            </div>
          )
        })}
    </div>
  )
}

export default App
