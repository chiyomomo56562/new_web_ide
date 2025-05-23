package com.new_web_ide.demo.repository;

import com.new_web_ide.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserId(String userId);
    boolean existsByUserId(String userId);
    boolean existsByEmail(String email);
    boolean existsByNickname(String nickname);
} 