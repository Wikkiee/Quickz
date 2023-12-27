package com.wikkie.quickz.Controller;

import org.springframework.web.bind.annotation.RestController;
import com.wikkie.quickz.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

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

}
