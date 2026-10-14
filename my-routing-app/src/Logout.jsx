import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigateMe = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("loginStatus")
        navigateMe('/login')

    }
  return (
    <div>
        <h1>
            <button onClick={handleLogout}>Logout</button>
        </h1>
    </div>
  )
}

export default Logout