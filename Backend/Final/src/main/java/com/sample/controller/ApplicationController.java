package com.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.entity.Application;
import com.sample.service.ApplicationService;

@RestController
@RequestMapping("/application")
@CrossOrigin(origins = "*") 
public class ApplicationController {
    
    @Autowired
    private ApplicationService applicationService;

    @PostMapping("/add")
    public ResponseEntity<String> addApplication(@RequestBody Application application) {
        try {
            String result = applicationService.saveApplication(application);
            return ResponseEntity.ok(result); // Return 200 OK for successful request
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding application: " + e.getMessage());
        }
    }

    @PutMapping("/updateapplication")
    public ResponseEntity<String> updateApplication(@RequestBody Application application) {
        try {
            String result = applicationService.updateApplication(application);
            return ResponseEntity.ok(result); // Return 200 OK for successful request
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating application: " + e.getMessage());
        }
    }

    @GetMapping("/getapplications")
    public ResponseEntity<List<Application>> getApplications() {
        List<Application> applications = applicationService.getApplications();
        return ResponseEntity.ok(applications); // Return 200 OK with the list of applications
    }

    @DeleteMapping("/deleteapplication/{id}")
    public ResponseEntity<String> deleteApplication(@PathVariable Long id) {
        try {
            String result = applicationService.deleteApplication(id);
            return ResponseEntity.ok(result); // Return 200 OK for successful request
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting application: " + e.getMessage());
        }
    }
}
