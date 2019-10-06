package com.revature.services;

import java.util.List;

import com.revature.models.Tags;

public interface TagsService {
	
	public Tags getTagsById(int id);
	public Tags getTagsByName(String name);
	public List<Tags> getAllTags();
	public void updateTags(Tags tags);
	public void deleteTags(Tags tags);
	public void createTags(Tags tags);

}
