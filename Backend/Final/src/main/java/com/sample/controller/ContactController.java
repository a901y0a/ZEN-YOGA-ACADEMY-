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

import com.sample.entity.Contact;
import com.sample.service.ContactService;

@RestController
@RequestMapping("/contact")
@CrossOrigin(origins="*")
public class ContactController {
    
    @Autowired
    private ContactService contactService;

    @PostMapping("/add")
    public String addContact(@RequestBody Contact contact){
        return contactService.saveContact(contact);
    }

    @PutMapping("/updatecontact")
    public String updateContact(@RequestBody Contact contact){
        return contactService.updateContact(contact);
    }

    @GetMapping("/getcontacts")
    public List<Contact> getContacts(){
        return contactService.getContacts();
    }

    @DeleteMapping("/deletecontact/{id}")
    public String deleteContact(@PathVariable Long id){
        return contactService.deleteContact(id);
    }
}
