package com.sample.controller;

import java.util.List;

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

import com.sample.dto.Servicedto;
import com.sample.service.Serviceservice;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/services")
public class Servicecontroller {

    private final Serviceservice serviceService;

    public Servicecontroller(Serviceservice serviceService) {
        this.serviceService = serviceService;
    }

    @PostMapping
    public ResponseEntity<Servicedto> createService(@RequestBody Servicedto servicedto) {
        Servicedto createdService = serviceService.createService(servicedto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdService);
    }

    @GetMapping
    public ResponseEntity<List<Servicedto>> getAllServices() {
        List<Servicedto> services = serviceService.getAllServices();
        return ResponseEntity.ok(services);
    }

    @PutMapping("/{serviceId}")
    public ResponseEntity<Servicedto> updateService(@PathVariable Long serviceId, @RequestBody Servicedto updatedServiceDto) {
        Servicedto updatedService = serviceService.updateService(serviceId, updatedServiceDto);
        return ResponseEntity.ok(updatedService);
    }

    @DeleteMapping("/{serviceId}")
    public ResponseEntity<Void> deleteService(@PathVariable Long serviceId) {
        serviceService.deleteService(serviceId);
        return ResponseEntity.noContent().build();
    }
}