import React from 'react'

const Child = ({problem}) => {
  console.log('I am a child component');  

  return (
    <div>
      Child
    </div>
  )
}

export default React.memo(Child);
