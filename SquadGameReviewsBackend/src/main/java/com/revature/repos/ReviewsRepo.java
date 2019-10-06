package com.revature.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Reviews;

@Repository
public interface ReviewsRepo extends CrudRepository<Reviews, Integer>{

}
