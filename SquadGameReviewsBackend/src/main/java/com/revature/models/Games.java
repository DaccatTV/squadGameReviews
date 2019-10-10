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
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	@JsonIgnore
	private List<Console> console;
	
	@ManyToMany(cascade = { CascadeType.ALL })
	@JoinTable(
		name="gamesjtags", 
		joinColumns = {@JoinColumn(name="g_id")}, 
		inverseJoinColumns = {@JoinColumn(name="t_id")}
	)
	@JsonIgnore
	private List<Tags> tags;
	
	@OneToMany(mappedBy = "game")
	private List<Reviews> reviews;
	
	@OneToMany(mappedBy = "forumgame")
	private List<Forums> forumList;

	public Games() {
		super();
	}

	public Games(String gname, String overview, String publisher, String esrb, List<Console> console, List<Tags> tags,
			List<Reviews> reviews, List<Forums> forumList) {
		super();
		this.gname = gname;
		this.overview = overview;
		this.publisher = publisher;
		this.esrb = esrb;
		this.console = console;
		this.tags = tags;
		this.reviews = reviews;
		this.forumList = forumList;
	}

	public Games(int g_id, String gname, String overview, String publisher, String esrb, List<Console> console,
			List<Tags> tags, List<Reviews> reviews, List<Forums> forumList) {
		super();
		this.g_id = g_id;
		this.gname = gname;
		this.overview = overview;
		this.publisher = publisher;
		this.esrb = esrb;
		this.console = console;
		this.tags = tags;
		this.reviews = reviews;
		this.forumList = forumList;
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

	public List<Tags> getTags() {
		return tags;
	}

	public void setTags(List<Tags> tags) {
		this.tags = tags;
	}

	public List<Reviews> getReviews() {
		return reviews;
	}

	public void setReviews(List<Reviews> reviews) {
		this.reviews = reviews;
	}

	public List<Forums> getForumList() {
		return forumList;
	}

	public void setForumList(List<Forums> forumList) {
		this.forumList = forumList;
	}

	@Override
	public String toString() {
		return "Games [g_id=" + g_id + ", gname=" + gname + ", overview=" + overview + ", publisher=" + publisher
				+ ", esrb=" + esrb + ", console=" + console + ", tags=" + tags + ", reviews=" + reviews + ", forumList="
				+ forumList + "]";
	}

	
	
}
