import React from 'react'
import {useNavigate} from 'react-router-dom'
import { listEmployees } from '../services/EmployeeService';
export const HomeComponent = () => {
    const navigator = useNavigate();
    function addNewEmployee(e) {
  
        console.log("Adding employee");
        navigator('/add-employee')
            
       
      
    }
    function listEmployees(e) {
  
        console.log("Getting employee");
        navigator('/employees')
            
       
      
    }
  return (
    
           <div className=" container">
           <h2 className=' text-center'>Welcome to Employee Management System</h2>
           <h4 className=' text-center'>NEW EMPLOYEE</h4>
           <button type="button" className="btn btn-success btn-sm" onClick={addNewEmployee}>Add Employee</button>
           <h4 className=' text-center'>EXISTING EMPLOYEE</h4>
           <button type="button" className="btn btn-success btn-sm" onClick={listEmployees}> Employees </button>
    </div>
  )
}
