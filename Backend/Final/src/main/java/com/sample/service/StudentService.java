package com.sample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.entity.Student;
import com.sample.repository.StudentRepository;

@Service
public class StudentService {
    
    @Autowired
    private StudentRepository statusRepository;

    public String saveStatus(Student status){
        statusRepository.save(status);
        return "Student saved";
    }

    public String updateStatus(Student status){
        statusRepository.saveAndFlush(status);
        return "Student updated";
    }

    public List<Student> getStatuses(){
        return statusRepository.findAll();
    }

    public String deleteStatus(Long id){
        statusRepository.deleteById(id);
        return "Student  deleted";
    }
}
