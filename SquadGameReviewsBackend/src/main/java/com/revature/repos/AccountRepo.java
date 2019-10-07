package com.revature.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Accounts;

@Repository
public interface AccountRepo extends CrudRepository<Accounts, Integer>{

	
	
	
}
