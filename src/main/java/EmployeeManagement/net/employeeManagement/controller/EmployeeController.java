package EmployeeManagement.net.employeeManagement.controller;


import EmployeeManagement.net.employeeManagement.dto.EmployeeDto;
import EmployeeManagement.net.employeeManagement.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
@CrossOrigin("*")
public class EmployeeController {

    private EmployeeService employeeService;

    //Build Add Employee REST API
    @PostMapping("/create")
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee=employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }
    //Get Employee By ID
    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDto> getByID(@PathVariable Long id){
        EmployeeDto employeeDto=employeeService.getEmployeeById(id);
        return ResponseEntity.ok(employeeDto);
    }

    //Get all Employees REST API
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployee(){
        List<EmployeeDto> employeeDtoList=employeeService.getAllEmployees();
        return ResponseEntity.ok(employeeDtoList);
    }
    //Build Updated Employee REST API
    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable Long id, @RequestBody EmployeeDto employeeDto){
        EmployeeDto savedemployeeDto=employeeService.updateEmployee(id,employeeDto);
        return ResponseEntity.ok(savedemployeeDto);
    }

    //Delete Employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Employee deleted Successfully");
    }

}
