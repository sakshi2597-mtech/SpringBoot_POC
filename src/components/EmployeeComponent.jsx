import React, { useEffect } from 'react'
import { useState } from 'react'
import { createEmployees, getEmployees, updateEmployees } from '../services/EmployeeService'
import { useNavigate ,useParams} from 'react-router-dom'

export const EmployeeComponent = () => {
  const [firstName, setFirstName] =useState('')
  const[lastName, setLastName]=useState('')
  const[email, setEmail]=useState('')
  const navigator=useNavigate();
  
  const handleFirstName=(e)=>setFirstName(e.target.value);
  
  const handlelastName=(e)=>setLastName(e.target.value);
  
  const handleEmail=(e)=>setEmail(e.target.value);
  const {id}=useParams();
  useEffect(()=>{
    if(id){
      getEmployees(id).then((response)=>{
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      }).catch(error=>{
        console.log(error);
      })
    }

  },[id])
  function saveOrUpdateEmployee(e){
    e.preventDefault();

    const employee={firstName,lastName,email};
    console.log(employee);
    if(id){
      updateEmployees(id,employee).then((response)=>{
        console.log(response.date);
        navigator('/employees');
      }).catch(error=>{
        console.log(error);
      })
    }
    else{
      createEmployees(employee).then((response)=>{
        console.log(response.data);
        navigator('/employees')
      }).catch(error=>{
        console.log(error);
      })
    }
   
  }
  function pageTitle(){
    if(id){
      return <h2 className='text-center'>Update Employee</h2>
    }
    else{
      return <h2 className='text-center'>Add Employee</h2>
    }
  }
  return (
    <div className='container'>
      <br/> <br />
       <div className='row'>
       <div class="card text-center">
        <div class="card-header">
             EMPLOYEE DETAILS
         </div>
         </div>
       <div class='card w-200'>
          {
            pageTitle()
          }
          <div className='card-body'>
             <form>
               <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input
                   type='text'
                   placeholder='Enter Employee First Name'
                   name='firstName'
                   value={firstName}
                   className='form-control'
                   onChange={handleFirstName}
                >
                </input>
               </div>
               <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input
                   type='text'
                   placeholder='Enter Employee Last Name'
                   name='lastName'
                   value={lastName}
                   className='form-control'
                   onChange={handlelastName}
                >
                </input>
               </div>
               <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input
                   type='text'
                   placeholder='Enter Employee Email'
                   name='email'
                   value={email}
                   className='form-control'
                   onChange={handleEmail}
                >
                </input>
               </div>
                  <button className='btn btn-success' onClick={saveOrUpdateEmployee}>
                      Submit
                  </button>
            </form>

          </div>
         
        </div>

       </div>
    </div>
  )
}


