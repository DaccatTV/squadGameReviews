package com.revature.services;

import java.util.List;

import com.revature.models.Reviews;

public interface ReviewsService {
	
	public Reviews getReviewsById(int id);
	public List<Reviews> getReviewsByGId(int id);
	public List<Reviews> getReviewsByAId(int id);
	public List<Reviews> getAllReviews();
	public void updateReviews(Reviews reviews);
	public void deleteReviews(Reviews reviews);
	public void createReviews(Reviews reviews);

}
