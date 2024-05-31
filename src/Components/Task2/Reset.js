import React from 'react'

const Reset = ({setCount}) => {

    const handleReset = () =>{
        setCount(0)
    }

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Reset
