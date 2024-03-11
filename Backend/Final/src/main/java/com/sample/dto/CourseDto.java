package com.sample.dto;

public class CourseDto {
    private Long id;
    private String course;
    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public CourseDto(Long id, String course, String description) {
        this.id = id;
        this.course = course;
        this.description = description;
    }
}
