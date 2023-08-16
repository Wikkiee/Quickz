package com.wikkie.quickz.Controller;

import org.springframework.web.bind.annotation.RestController;
import com.wikkie.quickz.Model.Users;
import com.wikkie.quickz.Service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class QuickzController {
    @Autowired
    UserService userService;

    @GetMapping("/")
    public String getMethodName() {
        return "Hello world";
    }

    @PostMapping("/register")
    public Users register(@RequestBody @Valid Users users) {
        return userService.saveUser(users);
    }

    @PostMapping("/login")
    public String login(@RequestBody @Valid Users users) {
        userService.getUser(users);
        return "Logged in";
    }

}
