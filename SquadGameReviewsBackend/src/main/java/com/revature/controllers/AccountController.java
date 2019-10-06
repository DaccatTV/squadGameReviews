package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Accounts;
import com.revature.services.AccountService;

@RestController
public class AccountController {

	@Autowired
	AccountService as;
	
	
	@RequestMapping(value = "/accounts", method = RequestMethod.GET)
	public List<Accounts> getAllAccounts(){
		
		return as.getAllAccounts();
	}


	@RequestMapping(value = "/accounts", method = RequestMethod.POST, consumes="application/json")
	public void createAccounts(@RequestBody Accounts accounts) {
		as.createAccounts(accounts);
	}
	
	@GetMapping(value = "/accounts/{id}")
	public Accounts getAccountsById(@PathVariable("id")int id) {
		return as.getAccountsById(id);
	}
	
	@GetMapping(value = "/accounts/username/{u_name}")
	public Accounts getAccountsById(@PathVariable("u_name")String name) {
		return as.getAccountsByName(name);
	}
	
	
	@RequestMapping(value = "/accounts", method = RequestMethod.PUT, consumes="application/json")
	public void updateAccounts(@RequestBody Accounts accounts) {
		//return as.updateAccounts(Accounts);
	}
	

	@RequestMapping(value = "/accounts/delete/{id}", method = RequestMethod.DELETE)
	public void removeAccounts(@PathVariable("id")int id) {
		 as.deleteAccounts(as.getAccountsById(id));
	}

	
}
