package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Messages;
import com.revature.services.MessagesService;

@RestController
public class MessagesController {
	
	@Autowired
	MessagesService ms;
	

	@RequestMapping(value = "/messages", method = RequestMethod.GET)
	public List<Messages> getAllMessages(){
		
		return ms.getAllMessages();
	}

	@RequestMapping(value = "/messages/fid/{id}", method = RequestMethod.GET)
	public List<Messages> getAllMessagesByFid(@PathVariable("id")int id){
		
		return ms.getMessagesByFid(id);
	}
	
	@RequestMapping(value = "/messages/aid/{id}", method = RequestMethod.GET)
	public List<Messages> getAllMessagesByAid(@PathVariable("id")int id){
		
		return ms.getMessagesByAid(id);
	}

	@RequestMapping(value = "/messages", method = RequestMethod.POST, consumes="application/json")
	public void createMessages(@RequestBody Messages messages) {
		ms.createMessages(messages);
	}
	
	@GetMapping(value = "/messages/{id}")
	public Messages getMessagesById(@PathVariable("id")int id) {
		return ms.getMessagesById(id);
	}
	
	
	@RequestMapping(value = "/messages", method = RequestMethod.PUT, consumes="application/json")
	public void updateMessages(@RequestBody Messages messages) {
		
	}
	

	@RequestMapping(value = "/messages/delete/{id}", method = RequestMethod.DELETE)
	public void removeMessages(@PathVariable("id")int id) {
		 ms.deleteMessages(ms.getMessagesById(id));
	}


}
