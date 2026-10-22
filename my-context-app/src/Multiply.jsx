import React, { useContext } from 'react'
import NumsContext from './NumsContext';

const Multiply =()=> {

         const {a,b} = useContext(NumsContext)

  return (
    <div>
         <h2>
            Multiply = {a*b}
        </h2>
    </div>
  )
}

export default Multiply