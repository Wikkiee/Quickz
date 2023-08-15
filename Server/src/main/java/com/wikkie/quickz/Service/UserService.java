package com.wikkie.quickz.Service;

import org.springframework.stereotype.Service;

import com.wikkie.quickz.Dao.UserDao;
import com.wikkie.quickz.Model.Users;

import java.util.List;

@Service
public class UserService {

    UserDao userDao;

    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public String getUser() {
        List s = userDao.findAll();
        System.out.println(s);
        return "User";
    }

    public String putUser() {
        Users model = new Users();
        model.setUserName("test");
        model.setUserEmail("test");
        model.setPin("sample");
        userDao.save(model);
        return "Saved";
    }
}
