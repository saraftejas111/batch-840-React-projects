import React from 'react'

const RevSum = ({revSum}) => {



  return (
    <div>

      <button onClick={()=>revSum(3,5)}>Send Sum Data</button>

    </div>
  )
}

export default RevSum