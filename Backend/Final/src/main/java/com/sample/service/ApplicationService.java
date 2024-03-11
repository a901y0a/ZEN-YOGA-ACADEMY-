package com.sample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.entity.Application;
import com.sample.repository.ApplicationRepository;

@Service
public class ApplicationService {
    
    @Autowired
    private ApplicationRepository applicationRepository;

    public String saveApplication(Application application){
        applicationRepository.save(application);
        return "Application saved";
    }

    public String updateApplication(Application application){
        applicationRepository.saveAndFlush(application);
        return "Application updated";
    }

    public List<Application> getApplications(){
        return applicationRepository.findAll();
    }

    public String deleteApplication(Long id){
        applicationRepository.deleteById(id);
        return "Application deleted";
    }
}
