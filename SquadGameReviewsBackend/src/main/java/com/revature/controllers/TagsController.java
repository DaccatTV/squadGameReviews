package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Tags;
import com.revature.services.TagsService;




@RestController
public class TagsController {
	@Autowired
	TagsService ts;
	
	@RequestMapping(value = "/tags", method = RequestMethod.GET)
	public List<Tags> getAllGames(){
		
		return ts.getAllTags();
	}


	@RequestMapping(value = "/tags", method = RequestMethod.POST, consumes="application/json")
	public void createTags(@RequestBody Tags tags) {
		ts.createTags(tags);
	}
	
	@GetMapping(value = "/tags/{id}")
	public Tags getTagsById(@PathVariable("id")int id) {
		return ts.getTagsById(id);
	}
	
	
	@RequestMapping(value = "/tags", method = RequestMethod.PUT, consumes="application/json")
	public void updateTags(@RequestBody Tags tags) {
		ts.updateTags(tags);
	}
	

	@RequestMapping(value = "/tags/delete/{id}", method = RequestMethod.DELETE)
	public void removeTags(@PathVariable("id")int id) {
		 ts.deleteTags(ts.getTagsById(id));
	}
}
