package com.gdn.ems_backend.service.Implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.gdn.ems_backend.dto.EmployeeDto;
import com.gdn.ems_backend.entity.EmployeeEntity;
import com.gdn.ems_backend.exception.ResourceNotFoundException;
import com.gdn.ems_backend.mapper.EmployeeMapper;
import com.gdn.ems_backend.repository.EmployeeRepository;
import com.gdn.ems_backend.service.EmployeeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor


public class EmployeeImplementation implements EmployeeService {

    private EmployeeRepository employeeRepository;
    // since the employeerepository implements the jpa respository where all the crud operations are there, 

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        // Input DTO → Converted to Entity → Saved in Repository → Saved Entity Converted Back to DTO.
        // Why we are returning back to dto because, in entity all the unnecessary columns will be there which are not necessary for client.
        
        EmployeeEntity employeeEntity = EmployeeMapper.mapEmployeeEntity(employeeDto);
        EmployeeEntity savedEmployee = employeeRepository.save(employeeEntity);
        return EmployeeMapper.maptTEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {

        EmployeeEntity employee = employeeRepository.findById(employeeId).
        orElseThrow(() -> new ResourceNotFoundException("Employee with this Id is not found: "+employeeId));
        // try, catch blocks, finally blocks, 
        return EmployeeMapper.maptTEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        
        List<EmployeeEntity> employees = employeeRepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.maptTEmployeeDto(employee)).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployeeDto(Long id, EmployeeDto updatedEmployeeDto) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Employee not found with the given id: " + id));

        // Only update fields that are not null
        if (updatedEmployeeDto.getEmail() != null) {
            employeeEntity.setEmail(updatedEmployeeDto.getEmail());
        }
        if (updatedEmployeeDto.getEmploymentType() != null) {
            employeeEntity.setEmploymentType(updatedEmployeeDto.getEmploymentType());
        }
        if (updatedEmployeeDto.getFirstName() != null) {
            employeeEntity.setFirstName(updatedEmployeeDto.getFirstName());
        }
        if (updatedEmployeeDto.getLastName() != null) {
            employeeEntity.setLastName(updatedEmployeeDto.getLastName());
        }
        if (updatedEmployeeDto.getLocation() != null) {
            employeeEntity.setLocation(updatedEmployeeDto.getLocation());
        }
        if (updatedEmployeeDto.getPhoneNumber() != null) {
            employeeEntity.setPhoneNumber(updatedEmployeeDto.getPhoneNumber());
        }
        if (updatedEmployeeDto.getSalary() != null) {
            employeeEntity.setSalary(updatedEmployeeDto.getSalary());
        }
        if (updatedEmployeeDto.getTechnology() != null) {
            employeeEntity.setTechnology(updatedEmployeeDto.getTechnology());
        }
        if (updatedEmployeeDto.getYearsOfExperience() != null) {
            employeeEntity.setYearsOfExperience(updatedEmployeeDto.getYearsOfExperience());
        }

        EmployeeEntity updatedEmployee = employeeRepository.save(employeeEntity);
        return EmployeeMapper.maptTEmployeeDto(updatedEmployee);
    }


    @Override
    public void deleteEmployee(long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found with the given id: "+ id));
        employeeRepository.deleteById(id);
        
    }

	
    

   

   

    
    
}
