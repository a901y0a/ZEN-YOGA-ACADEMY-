package com.sample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.entity.Course;
import com.sample.repository.CourseRepository;

@Service
public class CourseService {
    
    @Autowired
    private CourseRepository courseRepository;

    public String saveCourse(Course course){
        courseRepository.save(course);
        return "Course saved";
    }

    public String updateCourse(Course course){
        courseRepository.saveAndFlush(course);
        return "Course updated";
    }

    public List<Course> getCourses(){
        return courseRepository.findAll();
    }

    public String deleteCourse(Long id){
        courseRepository.deleteById(id);
        return "Course deleted";
    }
}
