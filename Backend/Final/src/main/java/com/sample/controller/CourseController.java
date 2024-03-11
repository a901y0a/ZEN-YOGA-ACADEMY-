package com.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.entity.Course;
import com.sample.service.CourseService;

@RestController
@RequestMapping("yoga_course")
@CrossOrigin(origins="*")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @PostMapping("/addcourse")
    public String addCourse(@RequestBody Course course) {
        return courseService.saveCourse(course);
    }

    @PutMapping("/updatecourse")
    public String updateCourse(@RequestBody Course course) {
        return courseService.updateCourse(course);
    }

    @GetMapping("/getcourses")
    public List<Course> getCourses() {
        return courseService.getCourses();
    }

    @DeleteMapping("/deletecourse/{id}")
    public String deleteCourse(@PathVariable Long id) {
        return courseService.deleteCourse(id);
    }
}
