import React, { useEffect, useState } from "react";
import { api } from "./apiServices";

const App = () => {
  const [alldata, setAllData] = useState([]);

  const [form, setForm] = useState({

    name: "",
    email: "",
    age: "",
    course: "",
  });

  const [up , setUp] = useState(false) 


  const loadAllStudents = async () => {
    const { data } = await api.get(`/students/`);
    setAllData(data);
  };

  useEffect(() => {
    loadAllStudents();
  }, []);

  const handleDelete = async (id) => {
    const res = await api.delete(`/students/${id}/`);
    loadAllStudents();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('inform')

    
    if (up) {
      console.log('in if')
      const res = await api.put(`/students/${form.id}/`, form);
      console.log("update : ", res);
    } else {
      console.log('in else')
      const res = await api.post(`/students/`, form);
      console.log("add : ", res);
    }

    loadAllStudents();
    setForm({ name: "", email: "", age: "", course: "" });
    setUp(false)
  };

  const handleUpdate =  (std) => {
    setForm(std)
    setUp(true)
  }
  return (
    <div>
      <center>
        <h2>{up ? "Update Student Form" : "Add Student Form"}</h2>
        <form onSubmit={handleSubmit}>
          name :{" "}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <br />
          email :{" "}
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <br />
          age :{" "}
          <input
            type="text"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <br />
          course :{" "}
          <input
            type="text"
            name="course"
            value={form.course}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <br />
          <button>
            {up ? "Update Student" : "Add Student"}
          </button>
        </form>

        <h2>All Students</h2>

        <table border="2">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>AGE</th>
              <th>COURSE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {alldata.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.age}</td>
                <td>{e.course}</td>
                <td>
                  <button onClick={() => handleDelete(e.id)}>Delete</button> {" "}
                  <button onClick={() => handleUpdate(e)}>Edit</button>
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
