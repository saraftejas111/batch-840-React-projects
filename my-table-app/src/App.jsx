import React, { useEffect, useState } from "react";
import "./App.css";
import { allEmployees, deleteEmployeeById, saveEmployee, updateEmployeeInDB } from "./data";

const App = () => {
  // let employees = [
  //   {id:101 , name : 'raj' , role : 'dev' , salary : 123456} ,
  //   {id:102 , name : 'tina' , role : 'tester' , salary : 123456} ,
  //   {id:103 , name : 'jay' , role : 'test' , salary : 123456} ,
  //   {id:104 , name : 'neha' , role : 'dev' , salary : 123456} ,
  // ]

  // 1. READ -- connection building
  // 2. DELETE
  // 3. CREATE
  // 4. UPDATE

  const [employees, setEmployees] = useState([]);

  const [show , setShow] = useState(false)

  let [employee, setEmployee] = useState({
    id: "",
    name: "",
    role: "",
    salary: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("emp info : ", employee);
    if (show) {
      updateEmployeeInDB(employee)
    } else {
     saveEmployee(employee) 
    }
    setEmployee({ id: "", name: "", role: "", salary: "" });
    loadAllEmployees();
    setShow(false)
  };

  // setEmployees(allEmployees())

  const loadAllEmployees = () => {
    setEmployees(allEmployees());
  };

  useEffect(() => {
    loadAllEmployees();
  }, []);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const heavyFunction = () => {
    console.log("heavy code Function 5000 lines..");
  };

  //  heavyFunction()

  //   useEffect : hook

  //   1. no dependency : will work as a normal calling function / no logic / not used

  // useEffect(()=>{
  //   heavyFunction()
  // })

  // 2. empty dependency array : only execute once ,  on 1st render of comp only

  // useEffect(()=>{
  //   heavyFunction()
  // } , [] )

  // 2. dependency array with variable : will definately execute on 1st render

  // and will always execute on changing the value of the variable which is mentioned in dependency array

  // useEffect(()=>{
  //   heavyFunction()
  // } , [num1] )

  const handleDeleteById = (id) => {
    deleteEmployeeById(id);
    loadAllEmployees();
  };

  const handleUpdate = (emp) => {
       setEmployee(emp)
       setShow(true)
  }

  return (
    <div>
      <center>
        {/* <button onClick={() => setNum1(num1 + 1)}>Plus Num1 : {num1}</button>{" "}
        {" | "}
        <button onClick={() => setNum2(num2 + 1)}>Plus Num2 : {num2}</button> */}

        <h2>Employee Form</h2>

        <form onSubmit={handleSubmit}>
          id :{" "}
          <input
            type="text"
            name="id"
            value={employee.id}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <br />
          name :{" "}
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <br />
          role :{" "}
          <input
            type="text"
            name="role"
            value={employee.role}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <br />
          salary :{" "}
          <input
            type="text"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <br />
          <button>{show ? "Update Employee" : "Add Employee"}</button>
        </form>

        <h2>Employee Table</h2>
        <table border={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>ROLE</th>
              <th>SALARY</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.role}</td>
                <td>{e.salary}</td>
                <td>
                  <button onClick={() => handleDeleteById(e.id)}>Delete</button>
                  <button onClick={() => handleUpdate(e)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default App;
