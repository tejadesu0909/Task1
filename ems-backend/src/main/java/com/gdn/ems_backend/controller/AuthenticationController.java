package com.gdn.ems_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gdn.ems_backend.models.AuthenticationRequest;
import com.gdn.ems_backend.models.AuthenticationResponse;
import com.gdn.ems_backend.security.MyUserDetailsService;
import com.gdn.ems_backend.util.JwtUtil;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React app
public class AuthenticationController {


    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private MyUserDetailsService myUserDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping(value = "/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try{

            authenticationManager.authenticate
            (new UsernamePasswordAuthenticationToken
                    (authenticationRequest.getUserName(), 
                    authenticationRequest.getPassword()));
            
        }catch (BadCredentialsException e){
            throw new Exception("Incorrect User name or Password", e);
        }

        final UserDetails userdetails = myUserDetailsService.loadUserByUsername(authenticationRequest.getUserName());
        final String jwt = jwtUtil.generateToken(userdetails);
        
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

}
