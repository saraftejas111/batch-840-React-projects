import React, { useState } from 'react'

const EmployeeForm = () => {

    let [employee , setEmployee] = useState({id:'' , empname:'' , salary : ''})

    const handleChange = (e) => {     
        setEmployee({...employee , [e.target.name] : e.target.value})
    }

    const handlleSubmit = (e) => {
        e.preventDefault()

        console.log("emp info : ", employee)
        setEmployee({id:'' , empname:'' , salary : ''})

    }

  return (
    <div>
      <h2>Employee Form</h2>

     <form onSubmit={handlleSubmit}>

      id : <input type="text" name='id' value={employee.id} onChange={handleChange} required/> <br /><br />
      empname : <input type="text" name='empname' value={employee.empname} onChange={handleChange} required/> <br /><br />
      salary : <input type="text" name='salary' value={employee.salary} onChange={handleChange} required/> <br /><br />

      <button>Submit</button>
     </form>
    </div>
  )
}

export default EmployeeForm
