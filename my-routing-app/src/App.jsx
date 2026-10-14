import React from "react";
import "./App.css";
import Kids from "./Kids";
import Mobiles from "./Mobiles";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./Profiel";
import Message from "./Message";

const App = () => {
  return (
    <div>
      <center>
        <h1>Welcome to My-Routing-App</h1>

        <Navbar />

        {/* 
        <Mobiles/>
        <Kids/> 
        */}

        {/* adding url to component / content / page */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mobiles" element={<Mobiles />} />
          <Route path="kids" element={<Kids />} />

          <Route path="login" element={<Login />} />
          {/* <Route path="profile" element={<Profile/>}/>
           <Route path="message" element={<Message/>}/> */}

          {/* <Route path="dashboard" element={<Dashboard/>}/> */}

          {/* <Route path="dashboard" element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
           }/>
           <Route path="profile" element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
           }/>
           <Route path="message" element={
            <ProtectedRoute>
              <Message/>
            </ProtectedRoute>
           }/> */}

          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="message" element={<Message />} />
          </Route>
       
        </Routes>
      
      </center>
    </div>
  );
};

export default App;
