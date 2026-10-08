import React from 'react'

const RecieveFun = ({getData}) => {
  return (
    <div>
        <h2>
            Recieve Function : {getData()}
        </h2>
    </div>
  )
}

export default RecieveFun