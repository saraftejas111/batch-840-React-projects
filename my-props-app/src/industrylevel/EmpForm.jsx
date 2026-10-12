import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EmpForm = ({refresh , acceptEmp}) => {

    const [form , setForm] = useState({name:'' , role:'developer' , salary:''})


    useEffect(()=>{
        if(acceptEmp){
            setForm(acceptEmp)
        }
    },[acceptEmp])

    const handleChange = (e) => {

        const {name , value} = e.target ; 
        setForm({...form , [name] : value})
    }

    const clearForm =()=>{
        setForm({name:'' , role:'developer' , salary:''})
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();

      if (acceptEmp) {
          let res = await axios.put(`http://localhost:3000/employees/${form.id}` , form)
    
      } else {
          let res = await axios.post(`http://localhost:3000/employees` , form)
        
      }
        clearForm(); 
        refresh(1)

    }
  return (
    <div>
        <h2>{acceptEmp ? "Update Employee Form" : "Add Employee Form"}</h2>

        <form onSubmit={handleSubmit}>
            name: <input type="text" name='name' value={form.name} onChange={handleChange} required/> <br /><br />
            role: <select name="role" value={form.role} onChange={handleChange} required>
                <option value="developer">developer</option>
                <option value="tester">tester</option>
                <option value="admin">admin</option>
                <option value="hr">hr</option>
                <option value="manager">manager</option>
            </select>
            
             <br /><br />
            salary: <input type="text" name='salary' value={form.salary} onChange={handleChange} required/> <br /><br />
       
       <button type="submit">{acceptEmp ? "Update Employee" : "Add Employee"}</button>
       
        </form>
    </div>
  )
}

export default EmpForm