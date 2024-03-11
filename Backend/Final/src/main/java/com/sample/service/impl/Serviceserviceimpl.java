package com.sample.service.impl;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sample.dto.Servicedto;
import com.sample.entity.Services;
import com.sample.exception.ResourceNotFoundException;
import com.sample.mapper.Servicemapper;
import com.sample.repository.Servicerepo;
import com.sample.service.Serviceservice;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class Serviceserviceimpl implements Serviceservice {
       private Servicerepo serviceRepository;

    @Override
    public Servicedto createService(Servicedto servicedto) {

        Services service = Servicemapper.maptoEmployee(servicedto);
        Services savedService = serviceRepository.save(service);
        return Servicemapper.maptoEmployeeDto(savedService);
    }
     @Override
    public List<Servicedto> getAllServices() {
        List<Services> services = serviceRepository.findAll();

        List<Servicedto> ServiceDtos = new ArrayList<>();
        for (Services service : services) {
            ServiceDtos.add(Servicemapper.maptoEmployeeDto(service));
        }
        return ServiceDtos;
}
@Override
    public Servicedto updateService(Long serviceId, Servicedto updatedServicesDto) {
        Services existingServices = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new ResourceNotFoundException("Services not found with id: " + serviceId));

        // Update the existing Services with the values from updatedServicesDto
        existingServices.setName(updatedServicesDto.getName());
        existingServices.setDescription(updatedServicesDto.getDescription());
        existingServices.setCharge(updatedServicesDto.getCharge());
        existingServices.setImage(updatedServicesDto.getImage());

        Services updatedServices = serviceRepository.save(existingServices);
        return Servicemapper.maptoEmployeeDto(updatedServices);
    }

    @Override
    public void deleteService(Long serviceId) {
        Services existingServices = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new ResourceNotFoundException("Services not found with id: " + serviceId));

        serviceRepository.delete(existingServices);
    }
}