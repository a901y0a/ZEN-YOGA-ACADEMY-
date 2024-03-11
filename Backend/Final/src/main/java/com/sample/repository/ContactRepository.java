package  com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    
}