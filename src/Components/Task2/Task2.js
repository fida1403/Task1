import React, { useState } from 'react'
import Counter from './Counter'
import Reset from './Reset'
import Sumcard from './Sumcard'


const Task2 = () => {

    const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Page Ttitle</h1>
      <Counter count={count} setCount={setCount}/>
      <Reset setCount={setCount}/>
      <Sumcard count={count}/>
    </div>
  )
}

export default Task2
