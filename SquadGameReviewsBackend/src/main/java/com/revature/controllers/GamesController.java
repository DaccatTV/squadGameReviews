package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Games;
import com.revature.services.GamesService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class GamesController {
	
	@Autowired
	GamesService gs;
	
	@RequestMapping(value = "/games", method = RequestMethod.GET)
	public List<Games> getAllGames(){
		
		return gs.getAllGames();
	}


	@RequestMapping(value = "/games", method = RequestMethod.POST, consumes="application/json")
	public void createGames(@RequestBody Games games) {
		gs.createGames(games);
	}
	
	@GetMapping(value = "/games/{id}")
	public Games getGamesById(@PathVariable("id")int id) {
		return gs.getGamesById(id);
	}
	
	
	@RequestMapping(value = "/games", method = RequestMethod.PUT, consumes="application/json")
	public void updateGames(@RequestBody Games games) {
		gs.updateGames(games);
	}
	

	@RequestMapping(value = "/games/delete/{id}", method = RequestMethod.DELETE)
	public void removeGames(@PathVariable("id")int id) {
		 gs.deleteGames(gs.getGamesById(id));
	}

}
