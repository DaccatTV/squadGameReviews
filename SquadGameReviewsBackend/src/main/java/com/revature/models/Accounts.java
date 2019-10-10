package com.revature.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table(name="accounts")
public class Accounts {
	
	@Id
	@SequenceGenerator(sequenceName="a_id_maker", name ="account_seq")
	@GeneratedValue(generator="account_seq", strategy=GenerationType.SEQUENCE)
	@Column
	private int a_id;
	
	@Column
	private String username;
	
	@Column
	private String pass;
	
	@Column
	private int status;
	
	@OneToMany(mappedBy = "account")
	private List<Reviews> reviews;
	
	@OneToMany(mappedBy = "messageAccount")
	private List<Messages> messages;

	public Accounts() {
		super();
	}

	public Accounts(String username, String pass, int status, List<Reviews> reviews, List<Messages> messages) {
		super();
		this.username = username;
		this.pass = pass;
		this.status = status;
		this.reviews = reviews;
		this.messages = messages;
	}

	public Accounts(int a_id, String username, String pass, int status, List<Reviews> reviews,
			List<Messages> messages) {
		super();
		this.a_id = a_id;
		this.username = username;
		this.pass = pass;
		this.status = status;
		this.reviews = reviews;
		this.messages = messages;
	}

	public int getA_id() {
		return a_id;
	}

	public void setA_id(int a_id) {
		this.a_id = a_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public List<Reviews> getReviews() {
		return reviews;
	}

	public void setReviews(List<Reviews> reviews) {
		this.reviews = reviews;
	}

	public List<Messages> getMessages() {
		return messages;
	}

	public void setMessages(List<Messages> messages) {
		this.messages = messages;
	}

	@Override
	public String toString() {
		return "Accounts [a_id=" + a_id + ", username=" + username + ", pass=" + pass + ", status=" + status
				+ ", reviews=" + reviews + ", messages=" + messages + "]";
	}

	

}
