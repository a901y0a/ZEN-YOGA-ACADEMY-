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

import com.sample.entity.Student;
import com.sample.service.StudentService;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins="*")
public class StudentController {
    
    @Autowired
    private StudentService statusService;

    @PostMapping("/addstudent")
    public String addStatus(@RequestBody Student status){
        return statusService.saveStatus(status);
    }

    @PutMapping("/updatestudent")
    public String updateStatus(@RequestBody Student status){
        return statusService.updateStatus(status);
    }

    @GetMapping("/getstudent")
    public List<Student> getStatuses(){
        return statusService.getStatuses();
    }

    @DeleteMapping("/deletestudent/{id}")
    public String deleteStatus(@PathVariable Long id){
        return statusService.deleteStatus(id);
    }
}
