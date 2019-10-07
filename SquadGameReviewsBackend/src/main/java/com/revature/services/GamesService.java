package com.revature.services;

import java.util.List;

import com.revature.models.Games;

public interface GamesService {
	
	public Games getGamesById(int id);
	public Games getGamesByName(String name);
	public List<Games> getAllGames();
	public void updateGames(Games games);
	public void deleteGames(Games games);
	public void createGames(Games games);

}
