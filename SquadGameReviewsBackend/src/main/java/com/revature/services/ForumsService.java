package com.revature.services;

import java.util.List;

import com.revature.models.Forums;

public interface ForumsService {
	
	public Forums getForumsById(int id);
	public List<Forums> getForumsByGameId(int id);
	public Forums getForumsByTitle(String title);
	public List<Forums> getAllForums();
	public void updateForums(Forums forums);
	public void deleteForums(Forums forums);
	public void createForums(Forums forums);
	

}
