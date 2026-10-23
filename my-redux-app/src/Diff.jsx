import React from 'react'
import { useSelector } from 'react-redux';

const Diff = () => {

    const {a , b} = useSelector(state => state.nums) ; 
  return (
    <div>
        <h2>Diff = {a-b}</h2>
    </div>
  )
}

export default Diff