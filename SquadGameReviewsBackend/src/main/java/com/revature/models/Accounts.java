package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="accounts")
public class Accounts {
	
	@Id
	@Column
	private int a_id;
	
	@Column
	private String username;
	
	@Column
	private String pass;
	
	@Column
	private int status;
	
	public Accounts(String username, String pass, int status) {
		super();
		this.username = username;
		this.pass = pass;
		this.status = status;
	}

	public Accounts() {
		super();
	}

	public Accounts(int a_id, String username, String pass, int status) {
		super();
		this.a_id = a_id;
		this.username = username;
		this.pass = pass;
		this.status = status;
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

	@Override
	public String toString() {
		return "Accounts [a_id=" + a_id + ", username=" + username + ", pass=" + pass + ", status=" + status + "]";
	}

	
	
	
	
	

}
