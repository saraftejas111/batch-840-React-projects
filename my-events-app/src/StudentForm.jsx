import React, { useState } from "react";

const StudentForm = () => {
  let [roll, setRoll] = useState("");
  let [name, setName] = useState("");
  let [marks, setMarks] = useState("");

  const handleRoll = (e) => {
    setRoll(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMarks = (e) => {
    setMarks(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("roll : ", roll);
    console.log("name : ", name);
    console.log("marks : ", marks);

    setRoll("");
    setName("");
    setMarks("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>1. Student Form</h3>
        enter roll :{" "}
        <input type="text" value={roll} onChange={handleRoll} required /> <br />
        <br />
        enter name :{" "}
        <input type="text" value={name} onChange={handleName} required /> <br />
        <br />
        enter marks :{" "}
        <input type="text" value={marks} onChange={handleMarks} required />{" "}
        <br />
        <br />
        <button>Submit Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
