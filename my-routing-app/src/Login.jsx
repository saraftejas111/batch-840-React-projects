import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [form , setForm] = useState({username : '' , password : ''})

    const navigateMe = useNavigate() ; 

    const handleChange = (e) => {
        const {name , value} = e.target ; 
        setForm({...form , [name] : value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault() ; 
        console.log(form)

const {data} = await axios.get(`http://localhost:3000/igusers`)

const userFound = data.find((u)=>u.username == form.username || u.mobile == form.username)

console.log("userFound" , userFound)
console.log("form" , form)

     
       if (userFound) {
            console.log(userFound.password == form.password)
        if (userFound.password == form.password) {
          localStorage.setItem("loginStatus" , "success")
         localStorage.setItem("userInfo" , userFound.username)
        } else {
          alert("Password Not Match")
        }
         
        }else{
          alert("User not Found.. Please Sign up first")
        }

        
        navigateMe('/dashboard')
        setForm({username : '' , password : ''})
    }


  return (
    <div>
        <h2>Instagram Login</h2>

       {   localStorage.getItem("loginStatus") == 'success' ? <h1>Already Logged In</h1> : 

       <>
         <form onSubmit={handleSubmit}>

              username : <input type="text" name="username" placeholder="enter username or mobile" value={form.username} onChange={handleChange} required/> <br /><br />
              password : <input type="password" name="password" placeholder="enter password" value={form.password} onChange={handleChange} required/> <br /><br />
        
        <button type="submit">Login</button>
        </form> 
       </>

       }
      
    </div>
  )
}

export default Login