package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.revature.models.Messages;
import com.revature.repos.MessagesRepo;

@Service
@Component
public class MessagesServiceImpl implements MessagesService{
	
	@Autowired
	MessagesRepo mr;

	@Override
	public Messages getMessagesById(int id) {
		
		return mr.findById(id).get();
	}

	@Override
	public List<Messages> getAllMessages() {
		
	Iterable<Messages> messages = mr.findAll();
		
		List<Messages> messagesList = (List<Messages>)messages;
		
		return messagesList;
		
	}

	@Override
	public void updateMessages(Messages messages) {
		
		mr.save(messages);
		
	}

	@Override
	public void deleteMessages(Messages messages) {
		
		mr.delete(messages);
		
	}

	@Override
	public void createMessages(Messages messages) {
		
		mr.save(messages);
		
	}

	@Override
	public List<Messages> getMessagesByFid(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Messages> getMessagesByAid(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
