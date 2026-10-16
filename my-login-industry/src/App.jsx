import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";

const App = () => {

 
  return (
    <div>
      <h1 style={{ marginLeft: "3%" }}>TKA_SOCIAL_APP</h1>
      <center>

     
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<ForgotPassword />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

        </Routes>
      </center>
    </div>
  );
};

export default App;
