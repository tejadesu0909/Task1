package com.gdn.ems_backend.dto;

import lombok.*;

@Getter
@Setter
public class RegisterRequestDto {
	
	private String username;
	private String password;
//	private String reenterpassword;
	private String email;

}
