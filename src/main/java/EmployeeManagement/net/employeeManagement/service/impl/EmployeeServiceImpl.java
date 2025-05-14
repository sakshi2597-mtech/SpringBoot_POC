package EmployeeManagement.net.employeeManagement.service.impl;

import EmployeeManagement.net.employeeManagement.dto.EmployeeDto;
import EmployeeManagement.net.employeeManagement.entity.Employee;
import EmployeeManagement.net.employeeManagement.exception.ResourceNotFoundException;
import EmployeeManagement.net.employeeManagement.mapper.EmployeeMapper;
import EmployeeManagement.net.employeeManagement.repository.EmployeeRepository;
import EmployeeManagement.net.employeeManagement.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee= EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee=employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee) ;
    }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee employee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee with given id does not exists"+id));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employeeList=employeeRepository.findAll();
        return employeeList.stream().map((Employee emp)->EmployeeMapper.mapToEmployeeDto(emp)).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long id, EmployeeDto updatedEmployee) {
        Employee employee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee with given id does not exists"+id));
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());
        Employee savedUpdatedEmployee=employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedUpdatedEmployee);
    }

    @Override
    public void deleteEmployee(Long id) {
        Employee employee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee with given id does not exists"+id));
        employeeRepository.deleteById(id);
    }
}
