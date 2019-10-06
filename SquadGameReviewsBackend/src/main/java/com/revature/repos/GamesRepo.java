package com.revature.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Games;

@Repository
public interface GamesRepo extends CrudRepository<Games, Integer>{

}
