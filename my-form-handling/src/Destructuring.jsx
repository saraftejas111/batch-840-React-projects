import React, { useState } from 'react'

const Destructuring = () => {

    const [cart , setCart] = useState({proName : '' , proPrice : '' , category : '' , quantity : ''})

    // console : ...cart , totalPrice (proPrice * quantity ) ,
    
    // (category == 'electronics' ... gst = 16 %)
    
    // (category == 'grocery' ... gst = 4 %)
    
    // discount (total >= 50,000 ... 12 % )

    // (total >= 100000 ... 18 % )
    
    // (total >= 5000 ... 3 % )
    
    // (total >= 10,000 ... 6 % )

    // final bill with gst and discount

    let emp1 =  {id : 101 , name: 'TKA' ,  role:'dev' , salary : '112233'}

    // const name = emp1.name ; 
    // const role = emp1.role ; 

    const {name , role } = emp1 ;   // destructuring --> most imp 

    console.log(name)
    console.log(role)



  return (
    <div>
      
    </div>
  )
}

export default Destructuring
