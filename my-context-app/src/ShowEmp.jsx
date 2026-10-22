import React, { useContext } from 'react'
import ObjectContext from './ObjectContext';

const ShowEmp = () => {

    const emp = useContext(ObjectContext)
  return (
    <div>
        <h2>

            ----------------- Employee Details : ---------------------
        </h2>

        <h3>Name : {emp.name}</h3>
        <h3>Role : {emp.role}</h3>
        <h3>Salary : {emp.salary}</h3>
    </div>
  )
}

export default ShowEmp