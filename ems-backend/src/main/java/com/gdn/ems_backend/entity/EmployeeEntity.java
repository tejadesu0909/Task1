package com.gdn.ems_backend.entity;

import jakarta.persistence.* ;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "employees")

public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id", updatable = false, nullable = false)
    private Long id;

    @Version
    @Column(name = "version")
    private Integer version;

    @Column(name = "first_Name", nullable = false)
    // @NotBlank(message = "First name cannot be empty.")
    private String firstName;

    @Column(name = "last_Name", nullable = false)
    // @NotBlank(message = "Last name cannot be empty.")
    private String lastName;

    @Column(name = "technology", nullable = false)
    // @NotBlank(message = "Technology cannot be empty.")
    private String technology;

    @Column(name = "years_Of_Experience", nullable = false)    
    // @NotBlank(message = "Experience cannot be empty.")
    private Integer yearsOfExperience;

    @Column(name = "salary", nullable = false)
    // @NotBlank(message = "Salary cannot be empty.")
    private Long salary;

    @Column(name = "location", nullable = false)
    // @NotBlank(message = "Location cannot be empty.")
    private String location;

    @Column(name = "email", nullable = false,unique = false) 
    // @Email(message = "Email should be valid")
    // @NotBlank(message = "Email cannot be empty.")
    private String email;

    @Column(name = "phone_Number", nullable = false,unique = true)
    // @NotBlank(message = "Phone number cannot be empty.")
    // @Digits(message = "Phone number should be numeric and valid.", fraction = 0, integer = 15) // Fraction = 0 means there will be no decimals. 
    private Long phoneNumber; 

    @Column(name = "employment_Type", nullable = false)
    // @NotBlank(message = "Phone number cannot be empty.")
    private String employmentType; 


    
}
