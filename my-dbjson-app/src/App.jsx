import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [allemployees, setAllemployees] = useState([]);

  const [employee, setEmployee] = useState({ name: "", role: "", salary: "" });

  const [up , setUp] = useState(false)

  const loadAllEmployees = () => {
    axios
      .get("http://localhost:3000/employees")
      .then((res) => {
        console.log("data from get", res.data);
        setAllemployees(res.data);
      })
      .catch((err) => {
        console.log("error in get ", err);
      });
  };

  useEffect(() => {
    loadAllEmployees();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/employees/" + id)
      .then((res) => {
        console.log("delete then ", res.data);
        loadAllEmployees();
      })
      .catch((err) => {
        console.log("error in delete ", err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const clearForm = () => {
    setEmployee({ name: "", role: "", salary: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (employee.id) {
      await axios.put(`http://localhost:3000/employees/${employee.id}`, employee)
        
    } else {
      await axios.post("http://localhost:3000/employees", employee)
    }

    loadAllEmployees();
    clearForm();
    setUp(false)
  };

  const handleUpdate = (emp) => {
    setEmployee(emp);
    setUp(true) ; 
  };

  return (
    <div>
      <center>
        <h1>Welcome to DbJson app</h1>

        <h2>{up  ? "Update Employee Form" : "Add Employee Form"}</h2>

        <form onSubmit={handleSubmit}>
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
          <button type="submit">{up ? "Update Employee" : "Add Employee"}</button>
        </form>
        <br />
        <br />

        <table border={2}>
          <thead>
            <tr>
              <th>NAME</th>
              <th>ROLE</th>
              <th>SALARY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {allemployees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.salary}</td>
                <td>
                  <button type="button" onClick={() => handleDelete(emp.id)}>
                    Delete
                  </button> {" "}
                  <button type="button" onClick={() => handleUpdate(emp)}>
                    Update
                  </button>
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

// step 1. create a projet level file with extension .json in project { not in src }

// step 2. insert 1 or 2 dummy objects

// step 3. install json-server : npm install -g json-server

// step 4. upload json file to server : json-server --watch db.json

// step 5. install axios : npm install axios { GET , POST , PUT , DELETE  , PATCH }

// step 5. access the data from RestAPI using axios

// step 6. axios.get(`http://localhost:3000/employees`) and used then & catch

// then executes when the the API respond 200 OK & catch executes when API responds 400 Error

// step 7. create a useState list variable and put the data in that variable

// step 8. access that variable in table using map
