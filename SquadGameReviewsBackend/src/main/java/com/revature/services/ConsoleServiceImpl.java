package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.revature.models.Console;
import com.revature.repos.ConsoleRepo;

@Service
@Component
public class ConsoleServiceImpl implements ConsoleService{

	@Autowired
	ConsoleRepo cr;
	
	@Override
	public Console getConsoleById(int id) {

		return cr.findById(id).get();
		
	}

	@Override
	public Console getConsoleByName(String name) {
		
		return null;
	}

	@Override
	public List<Console> getAllConsole() {
		return (List<Console>) cr.findAll();
	}

	@Override
	public void updateConsole(Console console) {
		cr.save(console);
		
	}

	@Override
	public void deleteConsole(Console console) {
		cr.delete(console);
		
	}

	@Override
	public void createConsole(Console console) {
		cr.save(console);
		
	}

}
