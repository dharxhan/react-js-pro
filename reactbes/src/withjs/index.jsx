import React from 'react'

const App = () => {
  return React.createElement(
    "section",
    { className: "app" },
    React.createElement("h1", {}, "I am without jsx"),
  )
}

export default App
