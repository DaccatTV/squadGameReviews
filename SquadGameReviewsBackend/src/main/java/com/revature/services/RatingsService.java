package com.revature.services;

import java.util.List;

import com.revature.models.Ratings;

public interface RatingsService {
	
	public Ratings getRatingsById(int id);
	public List<Ratings> getAllRatings();
	public void updateRatings(Ratings ratings);
	public void deleteRatings(Ratings ratings);
	public void createRatings(Ratings ratings);
	

}
