package com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.entity.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    
}