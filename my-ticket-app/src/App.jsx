import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


const App = () => {





  const [alltickets , setAlltickets] = useState([])
  const [form , setForm] = useState({name : '' , dept : 'Development' , issueType: 'Internet' , priority : '' , status : 'OPEN' , date : ''})

  const loadAllTickets = async () => {
      const {data} = await axios.get(`http://localhost:3000/tickets`)
      setAlltickets(data) ; 
  }

  useEffect(()=>{
    loadAllTickets();
  },[])

  
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/tickets/${id}`)
    loadAllTickets();
  }

  const handleChange = (e) => {

       const {name , value} = e.target ; 
       setForm({...form , [name]: value})
  }

  const clearForm = () => {
setForm({name : '' , dept : 'Development' , issueType: 'Internet' , priority : '' , status : 'OPEN' , date : ''})

  }

  const handleSubmit = async(e) => {
    e.preventDefault();


    const p = form.issueType == "Laptop" || form.issueType == "Internet" ? "HIGH" : 
              form.issueType ==  "Software" || form.issueType == "Email" ? "Medium" : "LOW"

       const dt = new Date();

       const newForm = {...form , priority : p , date : dt} 
                    

 
    if (newForm.id != null) {
          const {data} = await axios.put(`http://localhost:3000/tickets/${newForm.id}` , newForm)
          console.log(data)
          loadAllTickets();
          clearForm(); 
    } else {
          const {data} = await axios.post(`http://localhost:3000/tickets` , newForm)
          console.log(data)
          loadAllTickets();
          clearForm(); 
    }
  }

  const editTicekts = (t) => {
       setForm(t)
  }

  const handleResolve = async (id) => {

        const {data} = await axios.get(`http://localhost:3000/tickets/${id}`)

        const newData = {...data , status : "RESOLVED"}

        const {dt} = await axios.put(`http://localhost:3000/tickets/${id}` , newData)

        loadAllTickets(); 
  }

  const handleReject = async (id) => {
   
        const {data} = await axios.get(`http://localhost:3000/tickets/${id}`)

        const newData = {...data , status : "REJECT"}

        const {dt} = await axios.put(`http://localhost:3000/tickets/${id}` , newData)

        loadAllTickets(); 
  }
  return (
    <div>
      <center>
        <h2>
         Add Ticket Form
        </h2>

        <form onSubmit={handleSubmit}>
          name : <input type="text" name="name" value={form.name} onChange={handleChange} required/> <br /><br />
          dept : <select name="dept" value={form.dept} onChange={handleChange} required>

            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
            <option value="HR">HR</option>
            <option value="Sales">Sales</option>
            <option value="Support">Support</option>
          </select>
          <br /><br />
          Issue Type : <select name="issueType" value={form.issueType} onChange={handleChange} required>

            <option value="Internet">Internet</option>
            <option value="Laptop">Laptop</option>
            <option value="Software">Software</option>
            <option value="Email">Email</option>
            <option value="Printer">Printer</option>
            <option value="Other">Other</option>
          </select>
          <br /><br />
<button type="submit">Add Ticket</button>

        </form>

        <h2>
        All Tickets
        </h2>
       <table border='2'>

                <thead>
                    <tr>

                        <th>NAME</th>
                        <th>DEPT</th>
                        <th>ISSUE TYPE</th>
                        <th>PRIORITY</th>
                        <th>DATE</th>
                        <th>STATUS</th>
                        <th>ACTIONS</th>
                        <th>Support Required</th>
                      
                    </tr>
                </thead>

                <tbody>
                    {
                        alltickets.map((e) => (
                            <tr key={e.id}>
                              
                                <td>{e.name}</td>
                                <td>{e.dept}</td>
                                <td>{e.issueType}</td>
                                <td>{e.priority}</td>
                                <td>{e.date}</td>
                                <td>{e.status}</td>
                               
                                <td>
                                  
                                  {
                                    e.status == "OPEN" ? 
                                    
                                      <>
                                    <button  onClick={() => handleDelete(e.id)}>Delete</button> {" "}
                                    <button  onClick={()=> editTicekts(e)}>Update</button> {" "}
                                    <button onClick={()=> handleResolve(e.id)}>Resolve</button> {" "}
                                    <button onClick={()=> handleReject(e.id)}>Reject</button> {" "}
                                      </> : "Cannot Delete OR Update"
                                    
                                  }
                                </td>

                                <td>
                                  {
                                  e.priority == "HIGH" ? <label style={{color:'red'}}>URGENT SUPPORT REQUIRED</label> : ''
                                }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
      </center>
    </div>
  )
}

export default App