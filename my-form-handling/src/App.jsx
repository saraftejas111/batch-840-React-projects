import React from 'react'
import './App.css'
import EmployeeForm from './EmployeeForm';
import StudentForm from './StudentForm';
import Destructuring from './Destructuring';


const App = () => {
  return (
    <div>
      <center>
        <h1>
          Welcome
        </h1>

           {/* <EmployeeForm/> */}

           <StudentForm/>

           <Destructuring/>
      </center>
    </div>
  )
}

export default App
