package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Reviews;
import com.revature.services.ReviewsService;

@RestController
public class ReviewsController {
	
	@Autowired
	ReviewsService rs;
	
	@RequestMapping(value = "/reviews", method = RequestMethod.GET)
	public List<Reviews> getAllReviews(){
		
		return rs.getAllReviews();
	}


	@RequestMapping(value = "/reviews", method = RequestMethod.POST, consumes="application/json")
	public void createReviews(@RequestBody Reviews reviews) {
		rs.createReviews(reviews);
	}
	
	@GetMapping(value = "/reviews/{id}")
	public Reviews getReviewsById(@PathVariable("id")int id) {
		return rs.getReviewsById(id);
	}
	
	
	@RequestMapping(value = "/reviews", method = RequestMethod.PUT, consumes="application/json")
	public void updateReviews(@RequestBody Reviews reviews) {
		rs.updateReviews(reviews);
	}
	

	@RequestMapping(value = "/reviews/delete/{id}", method = RequestMethod.DELETE)
	public void removeReviews(@PathVariable("id")int id) {
		 rs.deleteReviews(rs.getReviewsById(id));
	}

}
