import React from 'react'

const Child = ({name, profession, handleClick}) => {
  return (
    <div>
      <h1>My name is {name}</h1>
      <h1>I'm an {profession}</h1>
      <button onClick={handleClick}>Dialog</button>
    </div>
  )
}

export default Child
