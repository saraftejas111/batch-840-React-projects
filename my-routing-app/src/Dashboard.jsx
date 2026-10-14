import React from 'react'
import Logout from './Logout';

const Dashboard = () => {


  return (
    <div>
        <h2>Login Success.. welcome to dashboard..{localStorage.getItem("userInfo")}</h2>

        <br /><br />

        <Logout />
    </div>
  )
}

export default Dashboard