package com.new_web_ide.demo.service;

import com.new_web_ide.demo.dto.SignupRequest;
import com.new_web_ide.demo.entity.User;
import com.new_web_ide.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public void signup(SignupRequest request) {
        if (userRepository.existsByUserId(request.getUserId())) {
            throw new RuntimeException("이미 존재하는 아이디입니다.");
        }
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("이미 존재하는 이메일입니다.");
        }

        User user = new User();
        user.setUserId(request.getUserId());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEmail(request.getEmail());
        
        // 닉네임 설정 로직
        String nickname = request.getUserId();
        int suffix = 1;
        while (userRepository.existsByNickname(nickname)) {
            nickname = request.getUserId() + suffix;
            suffix++;
        }
        user.setNickname(nickname);

        userRepository.save(user);
    }

    public boolean checkUserId(String userId) {
        return !userRepository.existsByUserId(userId);
    }
}