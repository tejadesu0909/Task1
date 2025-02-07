package com.gdn.ems_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gdn.ems_backend.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
	
	Optional<UserEntity> findByUsername (String username);
	boolean existsByUsername (String username);
	boolean existsByEmail (String email);

}
