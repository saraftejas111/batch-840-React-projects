import React, { useEffect, useState } from 'react'
import './App.css'


const App = () => {

  //  Basic variables in Javascript : 

  let name1 = "Tejas";  // created like js variable
  let age1 = 28;

  console.log(name1)
  console.log(age1)


  //  Basic variables in Typescript : 

  let name2: string = "Payal";  // created like ts variable
  let age2: number = 22;

  console.log(name2)
  console.log(age2)

  name1 = 45; // what is happening here is type interference, it means typescript automatically converting it into ts type variable
  age1 = 11 ; 

  console.log(name1)

  name2 = 50;
  age2 = '11' ; 

  console.log(name2)

    // now what is the actual differece? 

    // TypeScript mainly provides compile-time/static type checking. TypeScript type errors are caught during development/compilation and the type annotations themselves do not exist at runtime. 

    // but js errors may reflect at runtime, now i will provide some basic ts syntax variables and functions 

    let isActive : boolean = true ; 

    // nomal js function 

    function add1 (a,b) {  // compile time error because ts needs data type declaration

      return a + b ; 
    }

    console.log("sum1 : " , add1(5,4))  // it will give result, no error
    console.log("sum1 : " , add1(5,"4"))  // it will give result, no error
    console.log("sum1 : " , add1(true,"4"))  // it will give result, no error
    
    // ideal ts function should be like 
    
    function add2 (a : number ,b: number) :  number {  // compile time error because ts needs data type declaration
      return a + b ; 
    }

    console.log("sum2 : " , add2(2,3))  // it will give result, & correct approach 
    console.log("sum2 : " , add2(2,"3"))  // it will give result, but incorrect data type , so getting compiletime error or warning
    console.log("sum2 : " , add2(true,"3"))  // it will give result, but incorrect data type , so getting compiletime error or warning

// where is this benificial 

function wish1 () {
  return "hello good evening" ; 
}

console.log(wish1())

function wish2 () : void {
  return "hello good morning" ;   // it will work but giving compile time error because we have returned void
}

console.log(wish2())

// now fetch for API operations
// create db.json and put it on server 

const [alldata , setAllData] = useState([])

const showData = async () => {

         fetch(`http://localhost:3000/employees`).then((res)=>{
           res.json().then((dt)=> {   // manual json conversion
            setAllData(dt)
           })      
        }).catch((err)=>console.log("error in get : " , err))

        // shortcut 
        
        //  const Response = await fetch(`http://localhost:3000/employees`)
        //  const data = await Response.json() ; 
        //  console.log(data)
        //  setAllData(data)
}

// useEffect : for auto run function 

useEffect(()=>{
  showData() ; 
},[])

const [form , setForm] = useState({id :'' , name : '' , role : '' , salary : ''})

const handleChange = (e) => {
  const {name , value} = e.target ; 
  setForm({...form , [name] : value})

}
const handleSubmit = async (e) =>{
  e.preventDefault();
  
  if (form.id != '') {
    await fetch(`http://localhost:3000/employees/${form.id}` , {
    method : "PUT",
    headers : {
      "content-type" : "application/json"
    },
    body : JSON.stringify(form)
  })
  } else {
    await fetch(`http://localhost:3000/employees` , {
    method : "POST",
    headers : {
      "content-type" : "application/json"
    },
    body : JSON.stringify(form)
  })
  }
  
  setForm({id : '' , name : '' , role : '' , salary : ''})
  showData(); 
}

const handleDelete = async (id : any) => { //any is data type

  const response = await fetch(`http://localhost:3000/employees/${id}` , {
    method : "DELETE"

  })
  console.log("delete : ", response)
  showData(); // for refresh
}



  return (
    <div>
      <center>
        <h1>Welcome to my Fetch App</h1>

<h2>{form.id != '' ? "Update Form" : "Add Form"}</h2>
        <form onSubmit={handleSubmit}>
          name : <input type="text" name="name"  value={form.name} onChange={handleChange} required/> <br /><br />
          role : <input type="text" name="role"  value={form.role} onChange={handleChange} required/> <br /><br />
          salary : <input type="text" name="salary"  value={form.salary} onChange={handleChange} required/> <br /><br />
       
       <button>{form.id != '' ? "Update Employee" : "Add Employee"}</button>
       
        </form>

        <h2>
          All employees
        </h2>
        <table border={2}>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>ROLE</th>
                  <th>SALARY</th>
                </tr>
              </thead>

              <tbody>
                {
                  alldata.map((e)=>(
                    <tr key={e.id}>

                            <td>{e.name}</td>
                            <td>{e.role}</td>
                            <td>{e.salary}</td>
                            <td>
                              <button onClick={()=>handleDelete(e.id)}>Delete</button> {" "}
                              <button onClick={()=>setForm(e)}>Edit</button>
                            </td>
                    </tr>
                  ))
                }
              </tbody>
        </table>
                {/* <button onClick={showData}>Show Data</button> */}
      </center>
    </div>
  )
}

export default App