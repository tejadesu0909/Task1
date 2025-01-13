package com.gdn.ems_backend.models;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
@Data
public class AuthenticationRequest {

    @NotNull
    private String userName ;
    @NotNull
    private String password; 

}
