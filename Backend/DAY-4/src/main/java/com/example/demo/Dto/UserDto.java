package com.example.demo.Dto;

public class UserDto {
    private Long id;
    private String username;
    private String emailid;
    private String password;
    private String phoneNumber;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail_id() {
        return emailid;
    }

    public void setEmail_id(String email_id) {
        this.emailid = email_id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public UserDto(Long id, String username, String email,String password,String phoneNumber) {
        this.id = id;
        this.username = username;
        this.emailid = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}