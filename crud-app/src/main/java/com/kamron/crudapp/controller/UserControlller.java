package com.kamron.crudapp.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.kamron.crudapp.exception.ResourceNotFoundException;
import com.kamron.crudapp.model.User;
import com.kamron.crudapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin
@RestController
@RequestMapping("api/v1")
public class UserControlller {
    @Autowired
    UserRepository userRepository;

    @GetMapping(value="/users")   
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getSingleUser(@PathVariable String id) {
        User user = userRepository.findUserById(id);
        if(user == null){
            throw new ResourceNotFoundException("User not found for this id :: " + id);
        }
       return ResponseEntity.ok(user);
    }
    

    @PostMapping(value="/users")
    public User creatUser(@RequestBody User user) {
        return userRepository.save(user);

    }
    
    
    //update user
    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User user) {
        User newUser = userRepository.findUserById(id);
        if (newUser == null) {
            throw new ResourceNotFoundException("User not found for this id :: " + id);
        }
        System.out.println(user.getName());
        newUser.setName(user.getName());
        newUser.setAge(user.getAge());
        newUser.setEmail(user.getEmail());
        newUser.setPhone(user.getPhone());
        newUser.setJob(user.getJob());
        newUser.setCompany(user.getCompany());
        newUser.setName(user.getName());
        newUser.setCity(user.getCity());
            
        User updatedUser = userRepository.save(newUser);
        return ResponseEntity.ok(updatedUser);

            }

   
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable String id ){
            
        userRepository.deleteById(id);
    }

}
