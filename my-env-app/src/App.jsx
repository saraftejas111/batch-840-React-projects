import React, { useState } from 'react'
import './App.css'
import axios from 'axios';
import ShowProducts from './ShowProducts';
import ProductForm from './ProductForm';


const App = () => {
  const [ref , setRef] = useState(0)
  const [edit , setEdit] = useState(null)
  return (
    <div>
      <center>
        <h1>Welcome to ENV App</h1>
        <ProductForm ref={(e)=>{setRef(ref+e), setEdit(null)}} getEdit={edit}/>
        <ShowProducts ref={ref} handleEdit={(p)=>setEdit(p)}/>
      </center>
    </div>
  )
}

export default App