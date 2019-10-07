package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.revature.models.Accounts;
import com.revature.models.Forums;
import com.revature.repos.AccountRepo;

@Service
@Component
public class AccountServiceImpl implements AccountService {
	
	@Autowired
	AccountRepo ar;

	@Override
	public Accounts getAccountsById(int id) {
		
		return ar.findById(id).get();

	}

	@Override
	public Accounts getAccountsByName(String name) {
		List<Accounts> accountList = getAllAccounts();
		
		for(Accounts element : accountList) {
			
			if(name.equalsIgnoreCase(element.getUsername())){
					
				return element;
			}
				
		}
		
		return null;
	}

	@Override
	public List<Accounts> getAllAccounts() {
		
	Iterable<Accounts> accounts = ar.findAll();
		
		List<Accounts> accountList = (List<Accounts>)accounts;
		
		return accountList;
	}
	

	@Override
	public void updateAccounts(Accounts accounts) {
		ar.save(accounts);

	}

	@Override
	public void deleteAccounts(Accounts accounts) {
		ar.delete(accounts);

	}

	@Override
	public void createAccounts(Accounts accounts) {
		ar.save(accounts);

	}

}
