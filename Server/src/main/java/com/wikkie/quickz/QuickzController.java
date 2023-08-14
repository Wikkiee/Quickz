package com.wikkie.quickz;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class QuickzController {

    @GetMapping(value = "/")
    public String getMethodName() {
        return "Hello world";
    }

}
