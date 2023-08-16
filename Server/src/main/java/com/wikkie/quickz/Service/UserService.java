package com.wikkie.quickz.Service;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import com.wikkie.quickz.Dao.UserDao;
import com.wikkie.quickz.Model.Users;
import java.util.UUID;

@Service
public class UserService {

    UserDao userDao;

    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public String getUser(Users users) {
        Users res = userDao.findByUserEmail(users.getUserEmail());
        System.out.println(res);
        if (userDao.findByUserEmail(users.getUserEmail()) != null) {
            if (new BCryptPasswordEncoder().matches(users.getPin(), res.getPin())) {
                System.out.println("Pass matched");
            } else {
                System.out.println("Password incorrect");
            }
        } else {
            System.out.println("User not found");
        }
        return "User";
    }

    public Users saveUser(Users users) {
        users.setId(UUID.randomUUID().toString());
        users.setPin(new BCryptPasswordEncoder().encode(users.getPin()));
        System.out.println(userDao.findByUserEmail(users.getUserEmail()));
        if (userDao.findByUserEmail(users.getUserEmail()) == null) {
            return userDao.save(users);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
