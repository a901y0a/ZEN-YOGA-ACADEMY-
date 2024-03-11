package com.sample.service;

import java.util.List;

import com.sample.dto.Servicedto;

public interface Serviceservice {
    Servicedto createService(Servicedto serviceDto);

    void deleteService(Long serviceId);
    Servicedto updateService(Long serviceId,Servicedto updateServicedto);
    
    List< Servicedto> getAllServices();
}