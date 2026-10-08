import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowEmp = ({ doRefresh }) => {
  const [allemp, setAllemp] = useState([]);

  const [cat, setCat] = useState("name");

  const [val, setVal] = useState("");

  useEffect(() => {
    loadAllEmps();
  }, [doRefresh]);

  const loadAllEmps = async () => {
    const { data } = await axios.get(`http://localhost:3000/employees`);
    setAllemp(data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/employees/${id}`);
    loadAllEmps();
  };

  const handleSearch = async () => {
    if (val == "") {
      alert("please fill out the data");
      return;
    }

    const { data } = await axios.get(`http://localhost:3000/employees`);

    console.log("data in search : ", data);
    console.log("cat in search : ", cat);
    console.log("val in search : ", val);

    const ss = data.filter((d) => d.name == val || d.role == val);

    console.log("ss : ", ss);

    if (ss.length == 0) {
      alert("No Matching record Found");
      setVal("");
      setCat("name");
      loadAllEmps();

      return;
    }

    setVal("");
    setCat("name");
    setAllemp(ss);
  };

  return (
    <div>
      <h2>All Employees</h2>
      <h3>
        Search by :{" "}
        <select name="cat" onChange={(e) => setCat(e.target.value)}>
          <option value="name">name</option>
          <option value="role">role</option>
        </select>
        <br />{" "}
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </h3>{" "}
      <button onClick={handleSearch}>Search</button>{" "}
      <button onClick={loadAllEmps}>Show All</button>
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
          {allemp.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.role}</td>
              <td>{e.salary}</td>
              <td>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowEmp;
