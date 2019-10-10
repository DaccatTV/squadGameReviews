package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.Ratings;
import com.revature.repos.RatingsRepo;

@Service
public class RatingsServiceImpl implements RatingsService{

	@Autowired
	RatingsRepo rr;
	
	@Override
	public Ratings getRatingsById(int id) {
		return rr.findById(id).get();
	}

	@Override
	public List<Ratings> getAllRatings() {
		return (List<Ratings>) rr.findAll();
	}

	@Override
	public void updateRatings(Ratings ratings) {
		rr.save(ratings);
		
	}

	@Override
	public void deleteRatings(Ratings ratings) {
		rr.delete(ratings);
		
	}

	@Override
	public void createRatings(Ratings ratings) {
		rr.save(ratings);
		
	}

}
