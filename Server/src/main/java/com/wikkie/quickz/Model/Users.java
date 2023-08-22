package com.wikkie.quickz.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
@Entity
public class Users {
    @Id
    private String id;

    private String userName;
    @NotEmpty
    private String userEmail;
    @NotEmpty
    private String userPassword;
}
