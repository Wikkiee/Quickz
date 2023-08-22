package com.wikkie.quickz.Service;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.wikkie.quickz.Dao.UserDao;
import com.wikkie.quickz.Exception.ApiExceptionStatus;
import com.wikkie.quickz.Exception.ApiRequestException;
import com.wikkie.quickz.Model.Users;
import java.util.UUID;

@Service
public class UserService {

    UserDao userDao;

    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public ResponseEntity<String> getUser(Users users) {
        System.out.println(users.getUserEmail());
        Users result = userDao.findByUserEmail(users.getUserEmail());

        System.out.println(result);
        HttpHeaders httpHeaders = new HttpHeaders();

        if (userDao.findByUserEmail(users.getUserEmail()) != null) {
            if (new BCryptPasswordEncoder().matches(users.getUserPassword(), result.getUserPassword())) {

                httpHeaders.add("LOGIN", "SUCCESS");
                return new ResponseEntity<String>("Logged In Successfully", httpHeaders, HttpStatus.OK);
            } else {
                httpHeaders.add("LOGIN", "FAILED");
                return new ResponseEntity<String>("Invalid credentials", httpHeaders, HttpStatus.BAD_GATEWAY);
            }
        } else {
            httpHeaders.add("LOGIN", "FAILED");
            return new ResponseEntity<String>("Internal Server Error", httpHeaders, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    public String saveUser(Users users) {
        users.setId(UUID.randomUUID().toString());
        users.setUserPassword(new BCryptPasswordEncoder().encode(users.getUserPassword()));
        System.out.println(userDao.findByUserEmail(users.getUserEmail()));
        if (userDao.findByUserEmail(users.getUserEmail()) == null) {
            return userDao.save(users).getId();
        } else {
            throw new ApiRequestException(ApiExceptionStatus.USER_ALREADY_EXIST.toString());
        }
    }
}
