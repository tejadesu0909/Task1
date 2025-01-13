    // Below is the normal function component
// import React from 'react'

// function ListEmployeeComponent() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ListEmployeeComponent


    // Below is the arrow function component

import React, {useEffect, useState} from 'react'
import { deleteEmployee, listOfEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {
    
    const [employees, setEmployee] = useState([])
    
    const navigator = useNavigate();

        useEffect(()=> 
            {
            getAllEmployees();  
    }, [])

    // function getAllEmployees(){
    //     listOfEmployees().then((response) => {
    //         setEmployee(response.data);
    //     }).catch(error => {
    //         console.error(error);
    // })
    // }
    function getAllEmployees() {
        listOfEmployees()
          .then((response) => {
            console.log("Employee data fetched successfully:", response.data);
            setEmployee(response.data); // Populate employees state with API data
          })
          .catch((error) => {
            console.error("Error fetching employee data:", error.response || error.message);
          });
      }
      
      

    function addNewEmployee(){
        navigator('/add-employee')

    }

    function updateEmployee(id){
        navigator(`/edit-Employee/${id}`)
    }

    function removeEmployee(id){

        console.log(id);

        deleteEmployee(id).then((response) => {
            getAllEmployees();

        }).catch(error => {
            console.error(error);
        })
    }

    

    return (
    <div className='container'>
        
    <h2 className='text-center'> List Of Employees </h2>
    
    <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
    <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Technology</th>
                <th>Years Of Experience</th>
                <th>Salary</th>
                <th>Location</th>
                <th>Email</th>
                <th> Phone Number </th>
                <th>Employment Type</th>
                <th> Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map( employee => 
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.technology}</td>
                        <td>{employee.yearsOfExperience}</td>
                        <td>{employee.salary}</td>
                        <td>{employee.location}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phoneNumber}</td>
                        <td>{employee.employmentType}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}
                                >Update</button>
                            <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                style={{marginBlock:'9px'}}
                                >Delete</button>
                        </td>

                    </tr>)
            }
        </tbody>
    </table>
</div>
  )
}

export default ListEmployeeComponent
