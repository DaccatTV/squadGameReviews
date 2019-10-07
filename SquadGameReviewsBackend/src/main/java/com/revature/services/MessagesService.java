package com.revature.services;

import java.util.List;

import com.revature.models.Messages;

public interface MessagesService {

	public Messages getMessagesById(int id);
	public List<Messages> getMessagesByFid(int id);
	public List<Messages> getMessagesByAid(int id);
	public List<Messages> getAllMessages();
	public void updateMessages(Messages messages);
	public void deleteMessages(Messages messages);
	public void createMessages(Messages messages);
	
	
	
}
