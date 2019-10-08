package com.revature.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="reviews")
public class Reviews {
	
	@Id
	@SequenceGenerator(sequenceName="r_id_maker", name ="review_seq")
	@GeneratedValue(generator="review_seq", strategy=GenerationType.SEQUENCE)
	@Column
	private int r_id;
	
	@Column
	private String review;
	
	@Column
	private String title;
	
	@Column
	private int a_id;
	
	@Column
	private int g_id;
	
	@Column
	private int score;
	
	@ManyToOne
	@JoinColumn(name="fk_reviews_games")
	private Games game;
	
	@ManyToOne
	@JoinColumn(name="fk_reviews_accounts")
	private Accounts account;
	
	@OneToMany(mappedBy="review")
	private List<Ratings> ratings;
	
	public Reviews() {
		super();
	}

	public Reviews(String review, String title, int a_id, int g_id, int score, Games game, Accounts account,
			List<Ratings> ratings) {
		super();
		this.review = review;
		this.title = title;
		this.a_id = a_id;
		this.g_id = g_id;
		this.score = score;
		this.game = game;
		this.account = account;
		this.ratings = ratings;
	}

	public Reviews(int r_id, String review, String title, int a_id, int g_id, int score, Games game, Accounts account,
			List<Ratings> ratings) {
		super();
		this.r_id = r_id;
		this.review = review;
		this.title = title;
		this.a_id = a_id;
		this.g_id = g_id;
		this.score = score;
		this.game = game;
		this.account = account;
		this.ratings = ratings;
	}

	public int getR_id() {
		return r_id;
	}

	public void setR_id(int r_id) {
		this.r_id = r_id;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getA_id() {
		return a_id;
	}

	public void setA_id(int a_id) {
		this.a_id = a_id;
	}

	public int getG_id() {
		return g_id;
	}

	public void setG_id(int g_id) {
		this.g_id = g_id;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public Games getGame() {
		return game;
	}

	public void setGame(Games game) {
		this.game = game;
	}

	public Accounts getAccount() {
		return account;
	}

	public void setAccount(Accounts account) {
		this.account = account;
	}

	public List<Ratings> getRatings() {
		return ratings;
	}

	public void setRatings(List<Ratings> ratings) {
		this.ratings = ratings;
	}

	@Override
	public String toString() {
		return "Reviews [r_id=" + r_id + ", review=" + review + ", title=" + title + ", a_id=" + a_id + ", g_id=" + g_id
				+ ", score=" + score + ", game=" + game + ", account=" + account + ", ratings=" + ratings + "]";
	}

	

}
