package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="tags")
public class Tags {
	
	@Id
	@SequenceGenerator(sequenceName="t_id_maker", name ="tag_seq")
	@GeneratedValue(generator="tag_seq", strategy=GenerationType.SEQUENCE)
	@Column
	private int t_id;
	
	@Column
	private String tname;
	
	public Tags() {
		super();
	}

	public Tags(int t_id, String tname) {
		super();
		this.t_id = t_id;
		this.tname = tname;
	}

	public Tags(String tname) {
		super();
		this.tname = tname;
	}

	public int getT_id() {
		return t_id;
	}

	public void setT_id(int t_id) {
		this.t_id = t_id;
	}

	public String getTname() {
		return tname;
	}

	public void setTname(String tname) {
		this.tname = tname;
	}

	@Override
	public String toString() {
		return "Tags [t_id=" + t_id + ", tname=" + tname + "]";
	}
	
	
	

}
