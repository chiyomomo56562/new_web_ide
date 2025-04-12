package com.new_web_ide.demo.controller;

import com.new_web_ide.demo.dto.SignupRequest;
import com.new_web_ide.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/oauth2")
public class OAuth2Controller {

    private final UserService userService;

    @Autowired
    public OAuth2Controller(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {
        try {
            userService.signup(request);
            return ResponseEntity.ok().body("회원가입이 완료되었습니다.");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/check-userId")
    public ResponseEntity<?> checkUserId(@RequestParam String userId) {
        boolean isAvailable = userService.checkUserId(userId);
        // 중복된 아이디가 있으면 false, 없으면 true
        return ResponseEntity.ok().body(isAvailable);
    }
}