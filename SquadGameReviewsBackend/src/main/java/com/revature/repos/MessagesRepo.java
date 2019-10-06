package com.revature.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Messages;

@Repository
public interface MessagesRepo extends CrudRepository<Messages, Integer>{ 

}
