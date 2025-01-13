package com.gdn.ems_backend.dto;
// package com.gdn.ems_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {

    // public EmployeeDto(Long id2, String firstName2, String lastName2, String technology2, Integer yearsOfExp2,
    //         Long salary2, String location2, String email2, Long phoneNumber2, String employmentType2) {
    //     //TODO Auto-generated constructor stub
    // }

   
    private Long id;

    private String firstName;

    private String lastName;

    private String technology;

    private Integer yearsOfExperience;

    private Long salary;

    private String location;

    private String email;

    private Long phoneNumber;

    private String employmentType;


}
