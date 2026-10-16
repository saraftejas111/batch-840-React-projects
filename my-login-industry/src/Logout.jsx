import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigateMe = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loginStatus")
        navigateMe("/")
    }
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout