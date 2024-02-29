package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Application;
import com.example.demo.Repository.ApplicationRepository;

@Service
public class ApplicationService{
    @Autowired
    private ApplicationRepository applicationRepository;

    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<Application> getApplicationById(Long id) {
        return applicationRepository.findById(id);
    }

    @SuppressWarnings("null")
    public Application saveApplication(Application application) {
        return applicationRepository.save(application);
    }

    @SuppressWarnings("null")
    public void deleteApplication(Long id) {
        applicationRepository.deleteById(id);
    }
}
