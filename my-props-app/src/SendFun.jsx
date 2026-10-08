import React from 'react'

const SendFun = ({sendData}) => {

  return (
    <div>
        
        <button onClick={()=>sendData("hello from child to parent")}>Send to Parent</button>

    </div>
  )
}

export default SendFun