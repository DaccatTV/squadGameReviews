package com.revature.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Console;

@Repository
public interface ConsoleRepo extends CrudRepository<Console, Integer> {

}
