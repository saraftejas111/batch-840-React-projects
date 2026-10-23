import React from 'react'
import { useSelector } from 'react-redux';

const Sum = () => {

  const {a , b} = useSelector(state => state.nums);

  return (
    <div>
        <h2>Sum = {a+b}</h2>
    </div>
  )
}

export default Sum