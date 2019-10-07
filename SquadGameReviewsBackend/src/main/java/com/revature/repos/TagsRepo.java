package com.revature.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Tags;

@Repository
public interface TagsRepo extends CrudRepository<Tags, Integer>{

}
