package com.gdn.ems_backend.mapper;

import com.gdn.ems_backend.dto.EmployeeDto;
import com.gdn.ems_backend.entity.EmployeeEntity;

public class EmployeeMapper {

    public static EmployeeDto maptTEmployeeDto(EmployeeEntity employeeEntity){

        return new EmployeeDto(

        employeeEntity.getId(),
        employeeEntity.getFirstName(),
        employeeEntity.getLastName(),
        employeeEntity.getTechnology(),
        employeeEntity.getYearsOfExperience(),
        employeeEntity.getSalary(),
        employeeEntity.getLocation(),
        employeeEntity.getEmail(),
        employeeEntity.getPhoneNumber(),
        employeeEntity.getEmploymentType()

        );
    }

    public static EmployeeEntity mapEmployeeEntity(EmployeeDto employeeDto){
        return new EmployeeEntity(

            employeeDto.getId(),
            null, employeeDto.getFirstName(),
            employeeDto.getLastName(),
            employeeDto.getTechnology(),
            employeeDto.getYearsOfExperience(),
            employeeDto.getSalary(),
            employeeDto.getLocation(),
            employeeDto.getEmail(),
            employeeDto.getPhoneNumber(),
            employeeDto.getEmploymentType()
        );
    }


    
}
