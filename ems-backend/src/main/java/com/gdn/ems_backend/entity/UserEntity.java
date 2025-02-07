package com.gdn.ems_backend.entity;

import com.gdn.ems_backend.util.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class UserEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique = true, nullable = false)
	private String username;
	@Column(nullable = false)
	private String password;
	@Column(unique = true, nullable = false)
	private transient String reenterpassword;
	@Column(unique = true, nullable = false)
	private String email;
	@Enumerated(EnumType.STRING)
	@Column (nullable = false)
	private Role role; 
//	Created a custom enum where the user is restricted to select, admin or manager or employee
	
	
	}
