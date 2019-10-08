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
@Table(name="console")
public class Console {
	
	@Id
	@SequenceGenerator(sequenceName="c_id_maker", name ="console_seq")
	@GeneratedValue(generator="console_seq", strategy=GenerationType.SEQUENCE)
	@Column
	private int c_id;
	
	@Column
	private int c_name;
	
	@ManyToMany(mappedBy = "consoles")
	private List<Games> games;

	public Console() {
		super();
	}

	public Console(int c_name, List<Games> games) {
		super();
		this.c_name = c_name;
		this.games = games;
	}

	public Console(int c_id, int c_name, List<Games> games) {
		super();
		this.c_id = c_id;
		this.c_name = c_name;
		this.games = games;
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

	public List<Games> getGames() {
		return games;
	}

	public void setGames(List<Games> games) {
		this.games = games;
	}

	@Override
	public String toString() {
		return "Console [c_id=" + c_id + ", c_name=" + c_name + ", games=" + games + "]";
	}

	

}
