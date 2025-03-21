package com.new_web_ide.demo;

import jakarta.persistence.EntityManager;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import com.querydsl.jpa.impl.JPAQueryFactory;

import java.util.function.Supplier;

@EnableJpaAuditing
@SpringBootApplication
public class NewWebIdeApplication {

	public static void main(String[] args) {
		SpringApplication.run(NewWebIdeApplication.class, args);
	}
	@Bean
	public JPAQueryFactory jpaQueryFactory(EntityManager em) {
		return new JPAQueryFactory(em);
	}
}
