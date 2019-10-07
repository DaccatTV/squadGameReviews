package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="forums")
public class Forums {
	
	@Id
	@Column
	private int f_id;
	
	@Column
	private int g_id;
	
	@Column
	private String title;
	
	@Column
	private String posttime;
	
	@Column
	private int sticky;
	
	public Forums(int g_id, String title, String posttime, int sticky) {
		super();
		this.g_id = g_id;
		this.title = title;
		this.posttime = posttime;
		this.sticky = sticky;
	}

	public Forums() {
		super();
	}

	public Forums(int f_id, int g_id, String title, String posttime, int sticky) {
		super();
		this.f_id = f_id;
		this.g_id = g_id;
		this.title = title;
		this.posttime = posttime;
		this.sticky = sticky;
	}


	@Override
	public String toString() {
		return "Forums [f_id=" + f_id + ", g_id=" + g_id + ", title=" + title + ", posttime=" + posttime + ", sticky="
				+ sticky + "]";
	}

	public int getF_id() {
		return f_id;
	}

	public void setF_id(int f_id) {
		this.f_id = f_id;
	}

	public int getG_id() {
		return g_id;
	}

	public void setG_id(int g_id) {
		this.g_id = g_id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPosttime() {
		return posttime;
	}

	public void setPosttime(String posttime) {
		this.posttime = posttime;
	}

	public int getSticky() {
		return sticky;
	}

	public void setSticky(int sticky) {
		this.sticky = sticky;
	}


	
	
	
	
	

}
