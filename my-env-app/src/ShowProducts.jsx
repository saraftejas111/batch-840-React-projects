import React, { useEffect, useState } from "react";
import { api } from "./apiServices";

const ShowProducts = ({ref , handleEdit}) => {

    const [allproducts , setAllproducts] = useState([])

    const loadAllProducts = async() => {
        const {data} = await api.get(`/products`);
        setAllproducts(data)
    }

    useEffect(()=>{
        loadAllProducts();
    }, [ref])

    const handleDelete = async (pid) => {
       let {data} = await api.delete(`/products/${pid}`)
       loadAllProducts();
    }
  return (
    <div>
      <h2>All Products</h2>

      <table border={2}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>CATAGORY</th>
            <th>PRICE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {allproducts.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.catagory}</td>
              <td>{p.price}</td>
              <td>
                <button onClick={()=>handleDelete(p.id)}>Delete</button> {" "}
                <button onClick={()=>handleEdit(p)}>Edit</button>
              </td>

              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducts;
