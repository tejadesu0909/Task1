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
        EmployeeEntity employeeEntity = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found with the give id"+id));

        employeeEntity.setEmail(updatedEmployeeDto.getEmail());
        employeeEntity.setEmploymentType(updatedEmployeeDto.getEmploymentType());
        employeeEntity.setFirstName(updatedEmployeeDto.getFirstName());
        employeeEntity.setLastName(updatedEmployeeDto.getLastName());
        employeeEntity.setLocation(updatedEmployeeDto.getLocation());
        employeeEntity.setPhoneNumber(updatedEmployeeDto.getPhoneNumber());
        employeeEntity.setSalary(updatedEmployeeDto.getSalary());
        employeeEntity.setTechnology(updatedEmployeeDto.getTechnology());
        employeeEntity.setYearsOfExperience(updatedEmployeeDto.getYearsOfExperience());

        EmployeeEntity updatedEmployeeDtoObj = employeeRepository.save(employeeEntity);


        return EmployeeMapper.maptTEmployeeDto(updatedEmployeeDtoObj);
    }

    @Override
    public void deleteEmployee(long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found with the given id: "+ id));
        employeeRepository.deleteById(id);
        
    }

    

   

   

    
    
}
