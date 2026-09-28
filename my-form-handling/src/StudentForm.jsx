import React, { useState } from "react";

const StudentForm = () => {
  // student : roll , name , math , physics , chemistry

  // console : roll , name , math , physics , chemistry , total marks , percentage

  const [student, setStudent] = useState({
    roll: "",
    name: "",
    math: "",
    physics: "",
    chemistry: "",
    totalmarks: "",
    percentage: "",
  });

  const handleChange = (e) => {

    const {name , type , value} = e.target ;  // math , number , 80

    setStudent({ ...student, [name] : (type == 'number') ? Number (value) : value  });
  };

  const handlleSubmit = (e) => {
    e.preventDefault();

   // let totalM = Number (student.math) + Number (student.physics) + Number (student.chemistry) ; 
   
   // solution ----> optimization
   
    let totalM = student.math +  student.physics + student.chemistry ; 
    
    let percent = (totalM / 300) * 100 ; 

    const newStduent = {...student , totalmarks : totalM , percentage : percent}

    console.log(newStduent);

    setStudent({
      roll: "",
      name: "",
      math: "",
      physics: "",
      chemistry: "",
      totalmarks: "",
      percentage: "",
    });
  };

  return (
    <div>
      <h2>Student Form</h2>
      <form onSubmit={handlleSubmit}>
        roll :{" "}
        <input
          type="text"
          name="roll"
          value={student.roll}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        name :{" "}
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        math :{" "}
        <input
          type="number"
          name="math"
          value={student.math}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        physics :{" "}
        <input
          type="number"
          name="physics"
          value={student.physics}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        chemistry :{" "}
        <input
          type="number"
          name="chemistry"
          value={student.chemistry}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
