import React, { useEffect, useState } from 'react'
import { api } from './apiServices';

const ProductForm = ({ref , getEdit}) => {

    const [form , setForm] = useState({name:'' , catagory:'' , price:''})

    useEffect(()=>{
        if(getEdit){
           setForm(getEdit)
        }
    },[getEdit])

    const handleChange = (e) => {
        const {name , value} = e.target ; 
        setForm({...form , [name]:value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
       if (getEdit) {
         let {data} = await api.put(`/products/${form.id}` , form) 
       } else {
         let {data} = await api.post(`/products` , form) 
       }
        setForm({name:'' , catagory:'' , price:''})
        ref(1)
    }
  return (
    <div>
        <h2>{getEdit ? "Update Product Form" : "Add Product Form"}</h2>

        <form onSubmit={handleSubmit}>
            name : <input type="text" name="name" value={form.name} onChange={handleChange} required/> <br /><br />
            catagory : <input type="text" name="catagory" value={form.catagory} onChange={handleChange} required/> <br /><br />
            price : <input type="text" name="price" value={form.price} onChange={handleChange} required/> <br /><br />
       
       <button>{getEdit ? "Update Product" : "Add Product"}</button>
       
        </form>
    </div>
  )
}

export default ProductForm