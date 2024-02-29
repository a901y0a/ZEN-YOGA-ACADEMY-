package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.UserModel;
import com.example.demo.Repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<UserModel> getUserById(Long id) {
        return userRepository.findById(id);
    }

    @SuppressWarnings("null")
    public UserModel saveUser(UserModel user) {
        return userRepository.save(user);
    }
    @SuppressWarnings("null")
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}