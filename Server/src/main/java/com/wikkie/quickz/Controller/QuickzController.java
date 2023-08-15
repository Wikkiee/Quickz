package com.wikkie.quickz.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.wikkie.quickz.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class QuickzController {
    @Autowired
    UserService userService;

    @GetMapping("/")
    public String getMethodName() {
        return "Hello world";
    }

    @GetMapping("/user")
    public String getUser() {
        return userService.getUser();
    }

    @GetMapping("/post")
    public String post() {
        return userService.putUser();
    }

}
