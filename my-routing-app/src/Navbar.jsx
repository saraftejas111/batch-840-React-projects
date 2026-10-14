import React from 'react'
import { Link, Links, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
     
            <NavLink to={"/"}>Homepage</NavLink> {" | "}
            <NavLink to={"/mobiles"}>Mobiles</NavLink> {" | "}
            <NavLink to={"/kids"}>Kids</NavLink> {" | "}
            <NavLink to={"/login"}>Login</NavLink> {" | "}
            <NavLink to={"/dashboard"}>Dashboard</NavLink> {" | "}
            <NavLink to={"/profile"}>Profile</NavLink> {" | "}
            <NavLink to={"/message"}>Messages</NavLink> {" | "}
        
          
    </div>
  )
}

export default Navbar