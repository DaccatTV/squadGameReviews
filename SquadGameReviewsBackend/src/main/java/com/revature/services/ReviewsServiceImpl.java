package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.revature.models.Reviews;
import com.revature.repos.ReviewsRepo;

@Service
@Component
public class ReviewsServiceImpl implements ReviewsService{

	@Autowired
	ReviewsRepo rr;
	
	@Override
	public Reviews getReviewsById(int id) {
		return rr.findById(id).get();
	}

	@Override
	public List<Reviews> getReviewsByGId(int id) {
		
		return null;
	}

	@Override
	public List<Reviews> getReviewsByAId(int id) {
		
		return null;
	}

	@Override
	public List<Reviews> getAllReviews() {
		return (List<Reviews>) rr.findAll();
	}

	@Override
	public void updateReviews(Reviews reviews) {
		rr.save(reviews);
		
	}

	@Override
	public void deleteReviews(Reviews reviews) {
		rr.delete(reviews);
		
	}

	@Override
	public void createReviews(Reviews reviews) {
		rr.save(reviews);
		
	}

}
