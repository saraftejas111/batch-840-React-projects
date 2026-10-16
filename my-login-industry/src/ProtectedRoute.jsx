import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const isLoggedin = localStorage.getItem("loginStatus")

    return isLoggedin == "success" ? <Outlet/> : <Navigate to={"/"}/>
 
}

export default ProtectedRoute