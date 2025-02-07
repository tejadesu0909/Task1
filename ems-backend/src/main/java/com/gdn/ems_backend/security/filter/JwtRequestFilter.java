//package com.gdn.ems_backend.security.filter;
//
//import java.io.IOException;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import com.gdn.ems_backend.security.MyUserDetailsService;
//import com.gdn.ems_backend.util.JwtUtil;
//
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import lombok.AllArgsConstructor;




//
//@Component
//@AllArgsConstructor
//public class JwtRequestFilter extends OncePerRequestFilter{
//
//
//
//   private final JwtUtil jwtUtil;
//   private final UserDetailsService userDetailsService;
//
//
//
//
//    // private String getJwtFromRequest(HttpServletRequest request) {
//    //     String authHeader = request.getHeader("Authorization");
//    //     if (authHeader != null && authHeader.startsWith("Bearer ")) {
//    //         return authHeader.substring(7); // Extract the token after "Bearer "
//    //     }
//    //     return null; // Return null if the token is missing or invalid
//    // }
//    
//     @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//            throws ServletException, IOException {
//                final String authorizationHeader = request.getHeader("Authorization");
//
//                String username = null;
//                String jwt = null;
//
//                if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
//                    jwt = authorizationHeader.substring(7);
//                    System.out.println("Authorization header: " + authorizationHeader);
//                    System.out.println("JWT extracted: " + jwt);
//                    username = jwtUtil.extractUsername(jwt);
//                    System.out.println("Username extracted from JWT: " + username);
//                } else {
//                    // System.out.println("No JWT found in request or Authorization header is not formatted correctly.");
//                }
//                
//
//                if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//                    System.out.println("JWT detected for user: " + username);
//                
//                    UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
//                    System.out.println("Loaded user details: " + userDetails.getUsername());
//                
//                    if (jwtUtil.validateToken(jwt, userDetails)) {
//                        System.out.println("JWT is valid. Setting authentication for user: " + username);
//                        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
//                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//                        usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                        SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
//                        System.out.println("Authentication set successfully for user: " + username);
//                    } else {
//                        System.out.println("JWT validation failed for user: " + username);
//                    }
//                } else {
//                    if (username == null) {
//                        System.out.println("No JWT found in the request.");
//                    } else {
//                        System.out.println("Authentication context already set for user: " + username);
//                    }
//                }
//                
//                filterChain.doFilter(request, response);
//            }
//
//        
//
//}


package com.gdn.ems_backend.security.filter;

import com.gdn.ems_backend.util.JwtUtil;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.util.StringUtils;

import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final UserDetailsService userDetailsService; 

    public JwtRequestFilter(JwtUtil jwtUtil, UserDetailsService userDetailsService) {
        this.jwtUtil = jwtUtil;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        // ✅ Debug log to track all incoming requests
        System.out.println("Processing request: " + request.getRequestURI());

        String requestURI = request.getRequestURI();

        if (requestURI.contains("/authenticate") || requestURI.contains("/auth/register")) {
            System.out.println("Skipping JWT Filter for: " + requestURI);
            chain.doFilter(request, response);
            return;
        }

        final String authHeader = request.getHeader("Authorization");
        String jwt = null;
        String username = null;

        if (StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")) {
            jwt = authHeader.substring(7);
            username = jwtUtil.extractUsername(jwt);
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            if (jwtUtil.validateToken(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authToken);
                System.out.println("Authentication successful for user: " + username);
            } else {
                System.out.println("JWT validation failed for user: " + username);
            }
        }
        chain.doFilter(request, response);
    }

}

