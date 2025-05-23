import React ,{useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import {useNavigate, Link} from 'react-router-dom'
import { EmployeeComponent } from './EmployeeComponent'
import { deleteEmployees } from '../services/EmployeeService'

export const ListEmployeesComponents = () => {
const [employees,setEmployees]=useState([])
const navigator = useNavigate();





useEffect(()=>{
   getAllEmployees()
    
    
},[]
)
function getAllEmployees(){
    listEmployees().then((response)=>{
        setEmployees(response.data);
    }).catch(error=>{
        console.log(error);
    })
}



  
function addNewEmployee(e) {
  
    console.log("Adding employee");
    navigator('/add-employee')
        
   
  
}
function updateEmployee(id){
    navigator(`/edit-employee/${id}`)
}

function removeEmployee(id){
    console.log(id);
    deleteEmployees(id).then((response)=>{
        getAllEmployees();
    }).catch(error=>{
        console.error(error);
    })
}


 

  return (
    <div className=" container">
        <h3 className=' text-center'>List of Employees</h3>
       
        <button type="button" className="btn btn-success" onClick={addNewEmployee}>Add Employee</button>
        
    <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Actions</th>
              
            </tr>

        </thead>
        <tbody>
            
               {
                employees.map(employee=>
                <tr key={employee.id}>
                    <td>{employee.id} </td>
                    <td>{employee.firstName} </td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email} </td>
                     <td>
                        <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button>
                        <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)}
                            style={{marginLeft:'5px'}}>Delete</button>
                     </td>
                </tr>

                )
               }
            
        </tbody>
    </table>

    </div>
  );
}

