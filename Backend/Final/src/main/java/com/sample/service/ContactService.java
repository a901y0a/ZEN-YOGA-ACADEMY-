package com.sample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.entity.Contact;
import com.sample.repository.ContactRepository;

@Service
public class ContactService {
    
    @Autowired
    private ContactRepository contactRepository;

    public String saveContact(Contact contact){
        contactRepository.save(contact);
        return "Contact saved";
    }

    public String updateContact(Contact contact){
        contactRepository.saveAndFlush(contact);
        return "Contact updated";
    }

    public List<Contact> getContacts(){
        return contactRepository.findAll();
    }

    public String deleteContact(Long id){
        contactRepository.deleteById(id);
        return "Contact deleted";
    }
}
