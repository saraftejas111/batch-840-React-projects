import React, { useState } from "react";
import "./App.css";
import StudentForm from "./StudentForm";

const App = () => {
  let [text, setText] = useState("");
  let [id, setId] = useState("");
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");

  // onclick : it is an event which is used to execute a function on button clicked

  const handleClick = () => {
    console.log("click button press hua... ");
  };

  // onChange : input tag : it is an event which executes a function when the values of inpput tag is changed
  //    and onChange will send the input value to that handler function

  const handleInput = (v) => {
    // console.log(v)
    //console.log(v.target) // to get attributes of input tag
    // console.log(v.target.type)
    console.log(v.target.value);
    setText(v.target.value);
  };

  const handleName = (e) => {
    console.log(e.target.value);
  };

  const handleId = (e) => {
    setId(e.target.value);
  };
  const handleEmpname = (e) => {
    setName(e.target.value);
  };
  const handleSalary = (e) => {
    setSalary(e.target.value);
  };


  const handleSumbit = (e) => {

    e.preventDefault();

    console.log("id : " , id)
    console.log("name : " , name)
    console.log("salary : " , salary)

        setId('')
        setName('')
        setSalary('')

  }

  return (
    <div>
      <center>
        <h1>Welcome to my events app</h1>
        <button onClick={handleClick}>Click Me</button> <br />
        <br />
        

        {/* // Form Handling
        // Controlled Components  */}

        <StudentForm/>
        
        <form onSubmit={handleSumbit}>
          <h3>2. Employee Form</h3>
          id : <input type="text" value={id}  onChange={handleId} required /> <br />
          <br />
          name : <input type="text" value={name}  onChange={handleEmpname} required /> <br />
          <br />
          salary : <input type="text" value={salary} onChange={handleSalary} required /> <br />
          <br />
          <button type="submit">Submit Employee</button>
        </form>






        <br />
        <br />
        <br />
        <br />
        Enter email :{" "}
        <input
          type="email"
          name="textbox"
          onChange={handleInput}
          required
        />{" "}
        <br />
        <br />
        Enter name :{" "}
        <input type="text" name="name" onChange={handleName} required /> <br />
        <br />
        <button onClick={handleClick}>Submit</button> <br />
        <br />
        <h2>Text : {text}</h2>
      </center>
    </div>
  );
};

export default App;
