import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { api } from "./apiServices";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const navigateMe = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("form : ", form);

    const { data } = await api.get(`/users`);

    const userFound = data.find(
      (u) =>
        u.username == form.username ||
        u.mobile == form.username ||
        u.email == form.username,
    );

    console.log("userFound : ", userFound);

    if (userFound) {
        if (userFound.password == form.password) {
            localStorage.setItem("loginStatus" , "success")

            localStorage.setItem("userdetail" , JSON.stringify(userFound))

            navigateMe("/dashboard")
        } else {
            alert('Password is Incorrect')
        }
    } else {
       alert("User Not Found, Please Sign Up first.") 
    }

    setForm({ username: "", password: "" });
  };

  const handleSignup = () =>{
  navigateMe('/signup')
  }
  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.username}
          name="username"
          onChange={handleChange}
          placeholder="enter username or email or mobile"
          required
        />{" "}
        <br />
        <br />
        <input
          type="text"
          value={form.password}
          name="password"
          onChange={handleChange}
          placeholder="enter password"
          required
        />{" "}
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      <br /><br />
        <NavLink to={"/signup"}>Sign Up</NavLink> {" "}
        <NavLink to={"/forgot"}>Forgot Password ?</NavLink>
    </div>
  );
};

export default Login;
