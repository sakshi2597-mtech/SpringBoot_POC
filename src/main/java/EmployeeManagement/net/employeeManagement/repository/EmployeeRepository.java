package EmployeeManagement.net.employeeManagement.repository;

import EmployeeManagement.net.employeeManagement.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
