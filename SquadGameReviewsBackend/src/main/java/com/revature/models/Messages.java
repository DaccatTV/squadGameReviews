package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="messages")
public class Messages {
	
	@Id
	@SequenceGenerator(sequenceName="m_id_maker", name ="message_seq")
	@GeneratedValue(generator="message_seq", strategy=GenerationType.SEQUENCE)
	@Column
	private int m_id;
	
	@Column
	private int f_id;
	
	@Column
	private int a_id;
	
	@Column
	private String message;
	
	@Column
	private String posttime;
	
	public Messages() {
		super();
	}

	public Messages(int f_id, int a_id, String message, String posttime) {
		super();
		this.f_id = f_id;
		this.a_id = a_id;
		this.message = message;
		this.posttime = posttime;
	}

	public Messages(int m_id, int f_id, int a_id, String message, String posttime) {
		super();
		this.m_id = m_id;
		this.f_id = f_id;
		this.a_id = a_id;
		this.message = message;
		this.posttime = posttime;
	}

	@Override
	public String toString() {
		return "Messages [m_id=" + m_id + ", f_id=" + f_id + ", a_id=" + a_id + ", message=" + message + ", posttime="
				+ posttime + "]";
	}

	public int getM_id() {
		return m_id;
	}

	public void setM_id(int m_id) {
		this.m_id = m_id;
	}

	public int getF_id() {
		return f_id;
	}

	public void setF_id(int f_id) {
		this.f_id = f_id;
	}

	public int getA_id() {
		return a_id;
	}

	public void setA_id(int a_id) {
		this.a_id = a_id;
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
	

}
