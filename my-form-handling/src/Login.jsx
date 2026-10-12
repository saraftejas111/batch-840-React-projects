import React, { useState } from 'react'

const Login = () => {

    const [login , setLogin] = useState({username : '',password : ''})

    const [show , setShow] = useState(false)

    const handleChange = (e) => {
    const { name,value } = e.target;
    setLogin({ ...login, [name]: value });
  };

    const handleSubmit = (e) => {

        e.preventDefault() ; 
        console.log(login)
        setLogin({username : '' ,password : ''})
  };
  return (
    <div>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
            username : <input type="text" name='username' value={login.username}onChange={handleChange} required/> <br /><br />
            password : <input type={show ? "text" : "password"} name='password' value={login.password}onChange={handleChange} required/>         
       {" "}
        <button type="button" onClick={()=>setShow(!show)}> { show ? "Hide Password" : "Show Password"} </button> <br /><br />

        <button type="submit">Login</button>
        </form>

       
    </div>
  )
}

export default Login