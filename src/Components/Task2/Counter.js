import React from 'react'

const Counter = ({count, setCount}) => {

    if(count > 0){
        return <h1>The counter has reached the minimum value zero</h1>
    }

    if(count < 10){
        return <h1>The counter has reached the maximum value to ten</h1>
    }

  return (
    <div>
      <h2>Counter 1 <button onClick={setCount(count-1)}>-</button>{count}<button onClick={setCount(count+1)}>+</button></h2>
      <h2>Counter 2 <button onClick={setCount(count-1)}>-</button>{count}<button onClick={setCount(count+1)}>+</button></h2>
      <h2>Counter 3 <button onClick={setCount(count-1)}>-</button>{count}<button onClick={setCount(count+1)}>+</button></h2>
      <h2>Counter 4 <button onClick={setCount(count-1)}>-</button>{count}<button onClick={setCount(count+1)}>+</button></h2>

    </div>
  )
}

export default Counter
