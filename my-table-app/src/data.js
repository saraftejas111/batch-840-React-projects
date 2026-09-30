let employees = []


export const allEmployees = () => employees;

export const deleteEmployeeById = (id) => {
  employees = employees.filter((e) => e.id != id);
};

export const saveEmployee = (emp) => {
  


    if (employees.find((e)=> emp.id == e.id )) {
        alert('id already exist')
    } else {
          employees = [...employees , emp]
    }
}

export const updateEmployeeInDB = (emp) => {
     
         let newData = employees.filter((e) => e.id != emp.id);

         employees = [...newData , emp]
}