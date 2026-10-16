
import React from "react";
import Logout from "./Logout";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const userInfo = JSON.parse(
    localStorage.getItem("userdetail") || "null"
  );

  if (!userInfo) {
    return <h2>Please login first.</h2>;
  }

  return (
    <div>
      <h2>Welcome to User Dashboard</h2>

      <div style={{ marginLeft: "80%" }}>
        <Logout />
      </div>

      <NavLink to="/profile">Profile</NavLink> {" | "}
      <NavLink to="/message">Message</NavLink>

      <hr />

      <div>
        <img
          src={userInfo.propic}
          alt="User Profile"
          width="130"
          height="130"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid gray",
          }}
        />
      </div>

      <h3>First Name : {userInfo.firstname}</h3>
      <h3>Last Name : {userInfo.lastname}</h3>
      <h3>Email : {userInfo.email}</h3>
    </div>
  );
};

export default Dashboard;
