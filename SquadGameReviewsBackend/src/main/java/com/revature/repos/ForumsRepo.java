package com.revature.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.revature.models.Forums;

@Repository
public interface ForumsRepo extends CrudRepository<Forums, Integer>{

}
