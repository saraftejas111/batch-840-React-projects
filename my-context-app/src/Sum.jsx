import React, { useContext } from 'react'
import NumsContext from './NumsContext';

const Sum = () => {

    const {a,b} = useContext(NumsContext)
  return (
    <div>

        <h2>
            Sum = {a+b}
        </h2>
    </div>
  )
}

export default Sum