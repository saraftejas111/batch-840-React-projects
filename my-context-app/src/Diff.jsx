import React, { useContext } from 'react'
import NumsContext from './NumsContext';

const Diff =()=> {

         const {a , b} = useContext(NumsContext)

  return (
    <div>
         <h2>
            Diff = {a - b}
        </h2>
    </div>
  )
}

export default Diff