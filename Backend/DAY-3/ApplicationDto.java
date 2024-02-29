package com.example.demo.Dto;

public class ApplicationDto {
    private Long id;
    private String name;
    private String emailId;
    private String password;
    private int phoneNumber;
    private String gender;
    private String academy;
    private String schedulePreference;
    private int age;
    private String city;
    private String address;
    private String dateOfBirth;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAcademy() {
        return academy;
    }

    public void setAcademy(String academy) {
        this.academy = academy;
    }

    public String getSchedulePreference() {
        return schedulePreference;
    }

    public void setSchedulePreference(String schedulePreference) {
        this.schedulePreference = schedulePreference;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public ApplicationDto(Long id, String name, String emailId, String password, int phoneNumber, String gender, String academy, String schedulePreference, int age, String city, String address, String dateOfBirth) {
        this.id = id;
        this.name = name;
        this.emailId = emailId;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.academy = academy;
        this.schedulePreference = schedulePreference;
        this.age = age;
        this.city = city;
        this.address = address;
        this.dateOfBirth = dateOfBirth;
    }
}
