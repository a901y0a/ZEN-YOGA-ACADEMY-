package com.sample.dto;

public class StudentDto {
    private Long id;
    private String name;
    private String course;
    private String academy;
    private int admissionNo;
    private int age;


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

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getAcademy() {
        return academy;
    }

    public void setAcademy(String academy) {
        this.academy = academy;
    }
    public int getAdmissionNo() {
        return admissionNo;
    }

    public void setAdmissionNo(int admissionNo) {
        this.admissionNo = admissionNo;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
    public StudentDto(Long id, String name,String course, String academy,int admissionNo,int age) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.academy = academy;
        this.admissionNo = admissionNo;
        this.age = age;
    }
}