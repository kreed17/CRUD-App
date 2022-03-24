package com.kamron.crudapp.model;

import javax.annotation.Generated;

import org.springframework.data.annotation.Id;

// import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
 public class User {
     @Id
     private String _id;
    
    private String name;
    private String email;
    private String phone;
    private String job;
    private String company;
    private String age;
    private String city;

    
    public User() {
    }


    public User(String _id, String name, String email, String phone, String job, String company, String age,
            String city) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.job = job;
        this.company = company;
        this.age = age;
        this.city = city;
    }

    

    public String getId() {
        return _id;
    }


    public void setId(String id) {
        this._id = id;
    }


    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public String getPhone() {
        return phone;
    }


    public void setPhone(String phone) {
        this.phone = phone;
    }


    public String getJob() {
        return job;
    }


    public void setJob(String job) {
        this.job = job;
    }


    public String getCompany() {
        return company;
    }


    public void setCompany(String company) {
        this.company = company;
    }


    public String getAge() {
        return age;
    }


    public void setAge(String age) {
        this.age = age;
    }


    public String getCity() {
        return city;
    }


    public void setCity(String city) {
        this.city = city;
    }

    

    
}
