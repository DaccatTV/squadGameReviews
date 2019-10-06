package com.revature.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.revature.repos")
@ComponentScan("com.revature")
@EntityScan("com.revature.models")
public class SquadGameReviewsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SquadGameReviewsBackendApplication.class, args);
	}

}
