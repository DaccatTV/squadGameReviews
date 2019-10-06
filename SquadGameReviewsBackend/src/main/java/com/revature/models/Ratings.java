package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="reviewratings")
public class Ratings {
	
	@Column
	private int rating;
	@Column
	private int r_id;
	@Column
	private int a_id;
	@Id
	@Column
	private int rr_id;
	public Ratings() {
		super();
	}
	public Ratings(int rating, int r_id, int a_id, int rr_id) {
		super();
		this.rating = rating;
		this.r_id = r_id;
		this.a_id = a_id;
		this.rr_id = rr_id;
	}
	public Ratings(int rating, int r_id, int a_id) {
		super();
		this.rating = rating;
		this.r_id = r_id;
		this.a_id = a_id;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public int getR_id() {
		return r_id;
	}
	public void setR_id(int r_id) {
		this.r_id = r_id;
	}
	public int getA_id() {
		return a_id;
	}
	public void setA_id(int a_id) {
		this.a_id = a_id;
	}
	public int getRr_id() {
		return rr_id;
	}
	public void setRr_id(int rr_id) {
		this.rr_id = rr_id;
	}
	@Override
	public String toString() {
		return "Ratings [rating=" + rating + ", r_id=" + r_id + ", a_id=" + a_id + ", rr_id=" + rr_id + "]";
	}
	
	
	
	

}
