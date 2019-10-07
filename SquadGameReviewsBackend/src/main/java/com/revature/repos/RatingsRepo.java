package com.revature.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Ratings;

@Repository
public interface RatingsRepo extends CrudRepository<Ratings, Integer>{

}
