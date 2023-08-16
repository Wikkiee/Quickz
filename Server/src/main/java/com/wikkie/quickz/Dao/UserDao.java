package com.wikkie.quickz.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wikkie.quickz.Model.Users;

public interface UserDao extends JpaRepository<Users, String> {
    public Users findByUserEmail(String email);
}
