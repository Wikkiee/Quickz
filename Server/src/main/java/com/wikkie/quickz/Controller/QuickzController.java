package com.wikkie.quickz.Controller;

import org.springframework.web.bind.annotation.RestController;
import com.wikkie.quickz.Model.Users;
import com.wikkie.quickz.Service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class QuickzController {
    @Autowired
    UserService userService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public ResponseEntity<Boolean> home() {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("HOME", "AUTHENTICATION");
        return new ResponseEntity<Boolean>(false, httpHeaders, HttpStatus.OK);
    }

    // @PostMapping("/register")
    // public ResponseEntity<String> register(@RequestBody @Valid Users users) {
    // HttpHeaders responseHeader = new HttpHeaders();
    // responseHeader.add("Register", "SUCCESS");
    // // return new ResponseEntity<String>(userService.saveUser(users),
    // responseHeader, 200);
    // }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @Valid Users users) {

        return userService.getUser(users);
    }

}
