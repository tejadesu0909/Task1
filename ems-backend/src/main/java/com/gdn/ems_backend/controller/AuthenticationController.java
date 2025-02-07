package com.gdn.ems_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.gdn.ems_backend.dto.RegisterRequestDto;
import com.gdn.ems_backend.models.AuthenticationRequest;
import com.gdn.ems_backend.models.AuthenticationResponse;
import com.gdn.ems_backend.security.MyUserDetailsService;
import com.gdn.ems_backend.service.UserService;
import com.gdn.ems_backend.util.JwtUtil;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor  // ✅ Replaces @Autowired (for constructor injection)
@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React app
@RequestMapping("/auth")
public class AuthenticationController {

    private final AuthenticationManager authenticationManager;
    private final MyUserDetailsService myUserDetailsService;
    private final JwtUtil jwtUtil;
    private final UserService userService;

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) {
        try {
            System.out.println("Attempting login for user: " + authenticationRequest.getUsername());

            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getUsername(),  // ✅ Ensure matches DTO field
                    authenticationRequest.getPassword()
                )
            );

            System.out.println("Authentication successful for user: " + authenticationRequest.getUsername());

            // Load user details and generate JWT token
            final UserDetails userDetails = myUserDetailsService.loadUserByUsername(authenticationRequest.getUsername());
            final String jwt = jwtUtil.generateToken(userDetails);

            return ResponseEntity.ok(new AuthenticationResponse(jwt));

        } catch (BadCredentialsException e) {
            System.out.println("Authentication failed for user: " + authenticationRequest.getUsername());
            return ResponseEntity.status(401).body("Incorrect Username or Password");  // ✅ Return HTTP 401 Unauthorized
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody RegisterRequestDto request) {
        userService.registerUser(request);
        return ResponseEntity.ok("User registered Successfully");
    }
}
