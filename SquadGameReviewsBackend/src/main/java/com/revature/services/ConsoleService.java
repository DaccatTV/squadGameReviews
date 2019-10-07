package com.revature.services;

import java.util.List;

import com.revature.models.Console;

public interface ConsoleService {
	
	public Console getConsoleById(int id);
	public Console getConsoleByName(String name);
	public List<Console> getAllConsole();
	public void updateConsole(Console console);
	public void deleteConsole(Console console);
	public void createConsole(Console console);

}
