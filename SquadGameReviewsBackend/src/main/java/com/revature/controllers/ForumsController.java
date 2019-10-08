package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Forums;
import com.revature.services.ForumsService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ForumsController {
	
	@Autowired
	ForumsService fs;
	
	@RequestMapping(value = "/forums", method = RequestMethod.GET)
	public List<Forums> getAllForums(){
		
		return fs.getAllForums();
	}

	@RequestMapping(value = "/forums/games/{id}", method = RequestMethod.GET)
	public List<Forums> getAllForumsByGame(@PathVariable("id")int id){
		
		return fs.getForumsByGameId(id);
	}

	@RequestMapping(value = "/forums", method = RequestMethod.POST, consumes="application/json")
	public void createForums(@RequestBody Forums forums) {
		fs.createForums(forums);
	}
	
	@GetMapping(value = "/forums/{id}")
	public Forums getForumsById(@PathVariable("id")int id) {
		return fs.getForumsById(id);
	}
	
	
	@RequestMapping(value = "/forums", method = RequestMethod.PUT, consumes="application/json")
	public void updateForums(@RequestBody Forums forums) {
		
	}
	

	@RequestMapping(value = "/forums/delete/{id}", method = RequestMethod.DELETE)
	public void removeForums(@PathVariable("id")int id) {
		 fs.deleteForums(fs.getForumsById(id));
	}


}
