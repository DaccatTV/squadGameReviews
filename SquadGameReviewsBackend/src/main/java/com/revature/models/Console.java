package com.revature.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="consoles")
public class Console {
	
	@Id
	@SequenceGenerator(sequenceName="c_id_maker", name ="console_seq")
	@GeneratedValue(generator="console_seq", strategy=GenerationType.SEQUENCE)
	@Column
	private int c_id;
	
	@Column
	private String cname;

	public Console() {
		super();
	}

	public Console(String cname) {
		super();
		this.cname = cname;
	}

	public Console(int c_id, String cname) {
		super();
		this.c_id = c_id;
		this.cname = cname;
	}

	public int getC_id() {
		return c_id;
	}

	public void setC_id(int c_id) {
		this.c_id = c_id;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	@Override
	public String toString() {
		return "Console [c_id=" + c_id + ", cname=" + cname + "]";
	}

}
