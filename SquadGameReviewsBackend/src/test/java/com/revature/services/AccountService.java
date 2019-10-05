package com.revature.services;

import java.util.List;

import com.revature.models.Accounts;

public interface AccountService {

	public Accounts getAccountsById(int id);
	public Accounts getAccountsByName(String name);
	public List<Accounts> getAllAccounts();
	public void updateAccounts(Accounts accounts);
	public void deleteAccounts(Accounts accounts);
	public void createAccounts(Accounts accounts);
	
	
	
}
