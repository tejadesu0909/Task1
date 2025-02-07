package com.gdn.ems_backend.service;

import java.util.List;

import com.gdn.ems_backend.dto.EmployeeDto;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployeeDto(Long id, EmployeeDto updatedEmployeeDto);


    void deleteEmployee(long id);

    // List<EmployeeDto> getAuthDtos();
    
    


    
}
