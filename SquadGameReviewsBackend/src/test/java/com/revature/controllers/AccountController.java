package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.revature.services.AccountService;

@RestController
public class AccountController {

	@Autowired
	AccountService as;
	
}
