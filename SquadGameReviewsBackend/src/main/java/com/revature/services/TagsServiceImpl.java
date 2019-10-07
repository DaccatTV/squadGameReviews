package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.revature.models.Tags;
import com.revature.repos.TagsRepo;

@Service
@Component
public class TagsServiceImpl implements TagsService{

	@Autowired
	TagsRepo tr;
	
	@Override
	public Tags getTagsById(int id) {
		return tr.findById(id).get();
	}

	@Override
	public Tags getTagsByName(String name) {
		
		return null;
	}

	@Override
	public List<Tags> getAllTags() {
		return (List<Tags>) tr.findAll();
	}

	@Override
	public void updateTags(Tags tags) {
		tr.save(tags);
		
	}

	@Override
	public void deleteTags(Tags tags) {
		tr.delete(tags);
		
	}

	@Override
	public void createTags(Tags tags) {
		tr.save(tags);
		
	}

}
