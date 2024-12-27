import React, {useState} from 'react'

const api = {
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
  key: "1735fec0ffc5adea93fcbe29dfa8a6c4",
}

const App = () => {
  const[weather, setWeather] = useState({});
  const[search, setSearch] = useState('');

  function handleSearch() {
    fetch(`${api.baseUrl}?q=${search}&appid=${api.key}`)
    .then((res) => res.json())
    .then((data) => setWeather(data));
  }

  return (
    <div>
      <input 
        placeholder='Search City'
        onChange={(e) => setSearch(e.target.value)} />

      <button onClick={handleSearch}>Search</button>

      {weather.main !== undefined ? (
        <div>
          <p>{weather.name}</p>
          <p>{weather.main.temp}</p>
          <p>{weather.weather[0].main}</p>
          <p>{weather.weather[0].description}</p>
        </div>
      ):(
        <p>City not found</p>
      )}
    </div>
  )
}

export default App
