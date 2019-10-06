package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="console")
public class Console {
	
	@Id
	@Column
	private int c_id;
	@Column
	private int c_name;
	public Console() {
		super();
	}
	public Console(int c_id, int c_name) {
		super();
		this.c_id = c_id;
		this.c_name = c_name;
	}
	public Console(int c_name) {
		super();
		this.c_name = c_name;
	}
	public int getC_id() {
		return c_id;
	}
	public void setC_id(int c_id) {
		this.c_id = c_id;
	}
	public int getC_name() {
		return c_name;
	}
	public void setC_name(int c_name) {
		this.c_name = c_name;
	}
	@Override
	public String toString() {
		return "Console [c_id=" + c_id + ", c_name=" + c_name + "]";
	}
	
	
	
	

}
