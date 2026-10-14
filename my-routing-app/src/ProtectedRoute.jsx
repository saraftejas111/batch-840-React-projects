import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {   // children prop is removed when multiple child routes are present

    let isLoggedin = localStorage.getItem("loginStatus")

    
  //  return isLoggedin === 'success'? children : <Navigate to={"/login"}/>  // for single children

    return isLoggedin === 'success'? <Outlet/> : <Navigate to={"/login"}/>
}

export default ProtectedRoute