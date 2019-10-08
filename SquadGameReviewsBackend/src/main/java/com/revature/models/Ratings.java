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
	
	@Column
	private int r_id;
	
	@Column
	private int a_id;
	
	@ManyToOne
	@JoinColumn(name="fk_reviewratings_reviews")
	private Reviews review;
	
	@ManyToOne
	@JoinColumn(name="fk_reviewratings_accounts")
	private Accounts account;

	public Ratings() {
		super();
	}

	public Ratings(int rating, int r_id, int a_id, Reviews review, Accounts account) {
		super();
		this.rating = rating;
		this.r_id = r_id;
		this.a_id = a_id;
		this.review = review;
		this.account = account;
	}

	public Ratings(int rr_id, int rating, int r_id, int a_id, Reviews review, Accounts account) {
		super();
		this.rr_id = rr_id;
		this.rating = rating;
		this.r_id = r_id;
		this.a_id = a_id;
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
		return "Ratings [rr_id=" + rr_id + ", rating=" + rating + ", r_id=" + r_id + ", a_id=" + a_id + ", review="
				+ review + ", account=" + account + "]";
	}

	

}
