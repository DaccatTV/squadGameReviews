package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


import com.revature.models.Forums;
import com.revature.repos.ForumsRepo;

@Service
@Component
public class ForumsServiceImpl implements ForumsService{

	@Autowired
	ForumsRepo fr;
	
	@Override
	public Forums getForumsById(int id) {
		
		return fr.findById(id).get();

	
	}

	@SuppressWarnings("null")
	@Override  //returns a List<Forums>
	public List<Forums> getForumsByGameId(int g_id) {
	
		List<Forums> forumList = getAllForums();
		List<Forums> returnList = null;
		
		for(Forums element : forumList) {
			
			if(g_id == element.getG_id()){
					
				returnList.add(element);
			}
				
		}
		
		return returnList;

		
	}

	@Override
	public Forums getForumsByTitle(String title) {
	List<Forums> forumList = getAllForums();
		
		for(Forums element : forumList) {
			
			if(title.equalsIgnoreCase(element.getTitle())){
					
				return element;
			}
				
		}
		
		return null;
	}

	@Override
	public List<Forums> getAllForums() {
		
	Iterable<Forums> forums = fr.findAll();
		
		List<Forums> forumsList = (List<Forums>)forums;
		
		return forumsList;
	}

	@Override
	public void updateForums(Forums forums) {
	
		fr.save(forums);
		
	}

	@Override
	public void deleteForums(Forums forums) {
		fr.delete(forums);
		
	}

	@Override
	public void createForums(Forums forums) {
		fr.save(forums);
	}

}
