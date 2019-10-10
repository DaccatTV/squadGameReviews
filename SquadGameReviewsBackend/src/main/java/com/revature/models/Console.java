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
	
	@ManyToMany(mappedBy = "console")
	private List<Games> games;

	public Console() {
		super();
	}

	public Console(String cname, List<Games> games) {
		super();
		this.cname = cname;
		this.games = games;
	}

	public Console(int c_id, String cname, List<Games> games) {
		super();
		this.c_id = c_id;
		this.cname = cname;
		this.games = games;
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

	public List<Games> getGames() {
		return games;
	}

	public void setGames(List<Games> games) {
		this.games = games;
	}

	@Override
	public String toString() {
		return "Console [c_id=" + c_id + ", cname=" + cname + ", games=" + games + "]";
	}

	
	
}
