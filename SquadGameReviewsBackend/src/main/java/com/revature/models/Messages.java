package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="messages")
public class Messages {
	
	@Id
	@SequenceGenerator(sequenceName="m_id_maker", name ="message_seq")
	@GeneratedValue(generator="message_seq", strategy=GenerationType.SEQUENCE)
	@Column
	private int m_id;
	
	@ManyToOne
	@JoinColumn(name="f_id")
	@JsonIgnore
	private Forums forum;
	
	@ManyToOne
	@JoinColumn(name="a_id")
	@JsonIgnore
	private Accounts messageAccount;
	
	@Column
	private String message;
	
	@Column
	private String posttime;
	
	public Messages() {
		super();
	}

	public Messages(Forums forum, Accounts messageAccount, String message, String posttime) {
		super();
		this.forum = forum;
		this.messageAccount = messageAccount;
		this.message = message;
		this.posttime = posttime;
	}

	public Messages(int m_id, Forums forum, Accounts messageAccount, String message, String posttime) {
		super();
		this.m_id = m_id;
		this.forum = forum;
		this.messageAccount = messageAccount;
		this.message = message;
		this.posttime = posttime;
	}

	public int getM_id() {
		return m_id;
	}

	public void setM_id(int m_id) {
		this.m_id = m_id;
	}

	public Forums getForum() {
		return forum;
	}

	public void setForum(Forums forum) {
		this.forum = forum;
	}

	public Accounts getMessageAccount() {
		return messageAccount;
	}

	public void setMessageAccount(Accounts messageAccount) {
		this.messageAccount = messageAccount;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getPosttime() {
		return posttime;
	}

	public void setPosttime(String posttime) {
		this.posttime = posttime;
	}

	@Override
	public String toString() {
		return "Messages [m_id=" + m_id + ", forum=" + forum + ", messageAccount=" + messageAccount + ", message="
				+ message + ", posttime=" + posttime + "]";
	}

}
