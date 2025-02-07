package com.gdn.ems_backend.service;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.gdn.ems_backend.dto.RegisterRequestDto;
import com.gdn.ems_backend.entity.UserEntity;
import com.gdn.ems_backend.exception.CustomException;
import com.gdn.ems_backend.repository.UserRepository;
import com.gdn.ems_backend.util.Role;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserService {
	private final UserRepository userRepositroy;
	private final PasswordEncoder passwordEncoder;
	
	public UserEntity registerUser(RegisterRequestDto request) {
		
		if (userRepositroy.existsByUsername(request.getUsername())) {
			throw new CustomException("Username already taken", HttpStatus.BAD_REQUEST);
			
		}
		
		if (userRepositroy.existsByEmail(request.getEmail())) {
			throw new CustomException("Email already registered", HttpStatus.BAD_REQUEST);
		}
		
		UserEntity newUser = new UserEntity();
		newUser.setUsername(request.getUsername());
		newUser.setPassword(passwordEncoder.encode(request.getPassword()));
//		newUser.setReenterpassword(passwordEncoder.encode(request.getReenterpassword()));
		newUser.setEmail(request.getEmail());
		newUser.setRole(Role.EMPLOYEE);
		return userRepositroy.save(newUser);
		
	}
	
}
