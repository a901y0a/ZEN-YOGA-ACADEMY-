package  com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long> {
    
}