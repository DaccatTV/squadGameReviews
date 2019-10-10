package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Console;
import com.revature.services.ConsoleService;

@RestController
public class ConsoleController {
	
	@Autowired
	ConsoleService cs;
	
	@RequestMapping(value = "/consoles", method = RequestMethod.GET)
	public List<Console> getAllConsole(){
		
		return cs.getAllConsole();
	}


	@RequestMapping(value = "/consoles", method = RequestMethod.POST, consumes="application/json")
	public void createConsole(@RequestBody Console console) {
		cs.createConsole(console);
	}
	
	@GetMapping(value = "/consoles/{id}")
	public Console getConsoleById(@PathVariable("id")int id) {
		return cs.getConsoleById(id);
	}
	
	
	@RequestMapping(value = "/consoles", method = RequestMethod.PUT, consumes="application/json")
	public void updateConsole(@RequestBody Console console) {
		cs.updateConsole(console);
	}
	

	@RequestMapping(value = "/consoles/delete/{id}", method = RequestMethod.DELETE)
	public void removeConsole(@PathVariable("id")int id) {
		 cs.deleteConsole(cs.getConsoleById(id));
	}

}
