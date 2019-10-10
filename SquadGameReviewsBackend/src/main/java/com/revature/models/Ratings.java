package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="reviewratings")
public class Ratings {
	
	@Id
	@SequenceGenerator(sequenceName="rr_id_maker", name ="rating_seq")
	@GeneratedValue(generator="rating_seq", strategy=GenerationType.SEQUENCE)
	@Column
	private int rr_id;
	
	@Column
	private int rating;
	
	@ManyToOne
	@JoinColumn(name="r_id")
	@JsonIgnore
	private Reviews review;
	
	@ManyToOne
	@JoinColumn(name="a_id")
	private Accounts account;
	
	public Ratings() {
		super();
	}

	public Ratings(int rating, Reviews review, Accounts account) {
		super();
		this.rating = rating;
		this.review = review;
		this.account = account;
	}

	public Ratings(int rr_id, int rating, Reviews review, Accounts account) {
		super();
		this.rr_id = rr_id;
		this.rating = rating;
		this.review = review;
		this.account = account;
	}

	public int getRr_id() {
		return rr_id;
	}

	public void setRr_id(int rr_id) {
		this.rr_id = rr_id;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public Reviews getReview() {
		return review;
	}

	public void setReview(Reviews review) {
		this.review = review;
	}

	public Accounts getAccount() {
		return account;
	}

	public void setAccount(Accounts account) {
		this.account = account;
	}

	@Override
	public String toString() {
		return "Ratings [rr_id=" + rr_id + ", rating=" + rating + ", review=" + review + ", account=" + account + "]";
	}

}
