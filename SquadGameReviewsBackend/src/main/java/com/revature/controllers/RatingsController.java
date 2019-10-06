package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.revature.models.Ratings;
import com.revature.services.RatingsService;

public class RatingsController {
	
	@Autowired
	RatingsService rs;
	
	@RequestMapping(value = "/ratings", method = RequestMethod.GET)
	public List<Ratings> getAllRatings(){
		
		return rs.getAllRatings();
	}


	@RequestMapping(value = "/ratings", method = RequestMethod.POST, consumes="application/json")
	public void createRatings(@RequestBody Ratings ratings) {
		rs.createRatings(ratings);
	}
	
	@GetMapping(value = "/ratings/{id}")
	public Ratings getRatingsById(@PathVariable("id")int id) {
		return rs.getRatingsById(id);
	}
	
	
	@RequestMapping(value = "/ratings", method = RequestMethod.PUT, consumes="application/json")
	public void updateRatings(@RequestBody Ratings ratings) {
		rs.updateRatings(ratings);
	}
	

	@RequestMapping(value = "/ratings/delete/{id}", method = RequestMethod.DELETE)
	public void removeRatings(@PathVariable("id")int id) {
		 rs.deleteRatings(rs.getRatingsById(id));
	}

}
