package com.revature.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="games")
public class Games {
	
	@Id
	@SequenceGenerator(sequenceName="g_id_maker", name ="game_seq")
	@GeneratedValue(generator="game_seq", strategy=GenerationType.SEQUENCE)
	@Column
	private int g_id;
	
	@Column
	private String gname;
	
	@Column
	private String overview;
	
	@Column
	private String publisher;
	
	@Column
	private String esrb;
	
	@ManyToMany(cascade = { CascadeType.ALL })
	@JoinTable(
		name="gamesjconsoles", 
		joinColumns = { @JoinColumn(name="g_id") }, 
		inverseJoinColumns = { @JoinColumn(name="c_id") }
	)
	private List<Console> console;

	public Games() {
		super();
	}

	public Games(String gname, String overview, String publisher, String esrb, List<Console> console) {
		super();
		this.gname = gname;
		this.overview = overview;
		this.publisher = publisher;
		this.esrb = esrb;
		this.console = console;
	}

	public Games(int g_id, String gname, String overview, String publisher, String esrb, List<Console> console) {
		super();
		this.g_id = g_id;
		this.gname = gname;
		this.overview = overview;
		this.publisher = publisher;
		this.esrb = esrb;
		this.console = console;
	}

	public int getG_id() {
		return g_id;
	}

	public void setG_id(int g_id) {
		this.g_id = g_id;
	}

	public String getGname() {
		return gname;
	}

	public void setGname(String gname) {
		this.gname = gname;
	}

	public String getOverview() {
		return overview;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getEsrb() {
		return esrb;
	}

	public void setEsrb(String esrb) {
		this.esrb = esrb;
	}

	public List<Console> getConsole() {
		return console;
	}

	public void setConsole(List<Console> console) {
		this.console = console;
	}

	@Override
	public String toString() {
		return "Games [g_id=" + g_id + ", gname=" + gname + ", overview=" + overview + ", publisher=" + publisher
				+ ", esrb=" + esrb + ", console=" + console + "]";
	}

	
	
}
