package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	
	public Games() {
		super();
	}

	public Games(int g_id, String gname, String overview, String publisher, String esrb) {
		super();
		this.g_id = g_id;
		this.gname = gname;
		this.overview = overview;
		this.publisher = publisher;
		this.esrb = esrb;
	}

	public Games(String gname, String overview, String publisher, String esrb) {
		super();
		this.gname = gname;
		this.overview = overview;
		this.publisher = publisher;
		this.esrb = esrb;
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

	@Override
	public String toString() {
		return "Games [g_id=" + g_id + ", gname=" + gname + ", overview=" + overview + ", publisher=" + publisher
				+ ", esrb=" + esrb + "]";
	}
	
	

}
