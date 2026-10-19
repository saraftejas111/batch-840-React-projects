import React, { useEffect, useState } from "react";
import { api } from "./apiServices";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");

  const [user, setUser] = useState(null);

  const [securityquestion, setSecurityquestion] = useState(null);

  const [securityans, setSecurityans] = useState("");

  const [match, setMatch] = useState(null);

  const [newpass, setNewpass] = useState(null);

  const clearAll = () => {
    setUsername("");
    setUser(null);
    setSecurityquestion(null);
    setSecurityans("");
    setMatch(null);
    setNewpass(null);
  };

  useEffect(() => {
    if (user) {
      setSecurityquestion(user.securityquestion);
    }
  }, [user]);

  const navigateMe = useNavigate();

  const hadnleUsername = async (e) => {
    e.preventDefault();

    setMatch(null);
    
    const { data } = await api.get(`/users`);

    const userFound = data.find(
      (u) =>
        u.username == username || u.mobile == username || u.email == username,
    );

    if (userFound) {
      setUser(userFound);
      console.log("userFound : ", userFound);
      setUser(userFound);
    } else {
      alert("User Not Found with Matching Data");
    }
  };

  const checkAns = () => {
    if (securityans == user.securityanswer) {
      console.log("answer matched");
      setMatch(true);
    } else {
      setSecurityans("");
      alert("Security answer not matched");
    }
  };

  const handleNewPass = async (e) => {
    e.preventDefault();
    const { data } = await api.put(`/users/${user.id}`, user);
    console.log("after update : ", data);
    alert("New Password Set Successfully..");
    navigateMe("/");

    clearAll();
  };

  return (
    <div>
      <form onSubmit={hadnleUsername}>
        <input
          type="text"
          placeholder="enter email or username or mobile"
          onChange={(e) => setUsername(e.target.value)}
          required
        />{" "}
        <button type="submit">Check User</button>
      </form>
      {securityquestion && (
        <>
          <h3>
            Welocme {user.firstname}, <br /> <br /> please answer this security
            question <br /> <br /> {securityquestion}
          </h3>
          <input
            type="text"
            value={securityans}
            onChange={(e) => setSecurityans(e.target.value)}
          />{" "}
          <br />
          <br />
          <button onClick={checkAns}>submit answer</button>
        </>
      )}

      <br />
      <br />

      {match && (
        <>
          <form onSubmit={handleNewPass}>
            <input
              type="text"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
            <br />
            <br />
            <button>Set New Password</button>
          </form>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
