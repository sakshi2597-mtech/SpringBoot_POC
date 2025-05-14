import axios from "axios"
import { EmployeeComponent } from "../components/EmployeeComponent";

const REST_API_BASE_URL='http://localhost:8080/api/employees'
export const listEmployees=()=>axios.get(REST_API_BASE_URL);
export const createEmployees=(employee)=>axios.post(REST_API_BASE_URL + "/create",employee);
export const getEmployees=(employeeId)=>axios.get(REST_API_BASE_URL + '/'+employeeId);
export const updateEmployees=(employeeId,employee)=>axios.put(REST_API_BASE_URL + '/'+employeeId,employee);
export const deleteEmployees=(employeeId)=>axios.delete(REST_API_BASE_URL + '/'+employeeId);