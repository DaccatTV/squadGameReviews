package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.revature.models.Games;
import com.revature.repos.GamesRepo;

@Service
@Component
public class GamesServiceImpl implements GamesService{

	@Autowired
	GamesRepo gr;
	
	@Override
	public Games getGamesById(int id) {
		return gr.findById(id).get();
	}

	@Override
	public Games getGamesByName(String name) {
		
		return null;
	}

	@Override
	public List<Games> getAllGames() {
		return (List<Games>) gr.findAll();
	}

	@Override
	public void updateGames(Games games) {
		gr.save(games);
		
	}

	@Override
	public void deleteGames(Games games) {
		gr.delete(games);
		
	}

	@Override
	public void createGames(Games games) {
		gr.save(games);
		
	}

}
