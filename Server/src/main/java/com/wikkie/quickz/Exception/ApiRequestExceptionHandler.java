package com.wikkie.quickz.Exception;

import java.time.ZoneId;
import java.time.ZonedDateTime;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

class ApiRequestExceptionGenerator {

    public ResponseEntity<Object> Generate(ApiRequestException e, String message, HttpStatus httpStatus) {

        ApiExceptionObject apiException = new ApiExceptionObject(message, httpStatus,
                ZonedDateTime.now(ZoneId.of("Z")));
        HttpHeaders apiExceptionHeader = new HttpHeaders();
        apiExceptionHeader.add("Custom Exceptiom Name", "Custom Exception Value");
        return new ResponseEntity<Object>(apiException, apiExceptionHeader, httpStatus);
    }

}

@ControllerAdvice
public class ApiRequestExceptionHandler {

    @ExceptionHandler(value = { ApiRequestException.class })
    public ResponseEntity<Object> handleApiRequestException(ApiRequestException e) {
        String status = e.getMessage();
        if (status == ApiExceptionStatus.FAILED.toString()) {
            return new ApiRequestExceptionGenerator().Generate(e,
                    "The request could not be processed due to invalid or missing parameters.", HttpStatus.BAD_GATEWAY);
        } else if (status == ApiExceptionStatus.USER_NOT_FOUND.toString()) {
            return new ApiRequestExceptionGenerator().Generate(e,
                    "The user with the specified Email could not be found.", HttpStatus.NOT_FOUND);
        } else if (status == ApiExceptionStatus.USER_ALREADY_EXIST.toString()) {
            return new ApiRequestExceptionGenerator().Generate(e,
                    "This email address is already registered. Please use a different email address or try logging in with your existing account.",
                    HttpStatus.CONFLICT);
        } else {
            return new ApiRequestExceptionGenerator().Generate(e,
                    "An unexpected error occurred while processing your request. Please try again later.",
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}