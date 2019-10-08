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
@Table(name="forums")
public class Forums {
	
	@Id
	@SequenceGenerator(sequenceName="f_id_maker", name ="forum_seq")
	@GeneratedValue(generator="forum_seq", strategy=GenerationType.SEQUENCE)
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
	
	@ManyToOne
	@JoinColumn(name="fk_forums_games")
	private Games forumgame;
	
	@OneToMany(mappedBy = "forum")
	private List<Messages> messages;
	
	public Forums() {
		super();
	}

	public Forums(int g_id, String title, String posttime, int sticky, Games forumgame, List<Messages> messages) {
		super();
		this.g_id = g_id;
		this.title = title;
		this.posttime = posttime;
		this.sticky = sticky;
		this.forumgame = forumgame;
		this.messages = messages;
	}

	public Forums(int f_id, int g_id, String title, String posttime, int sticky, Games forumgame,
			List<Messages> messages) {
		super();
		this.f_id = f_id;
		this.g_id = g_id;
		this.title = title;
		this.posttime = posttime;
		this.sticky = sticky;
		this.forumgame = forumgame;
		this.messages = messages;
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

	public Games getForumgame() {
		return forumgame;
	}

	public void setForumgame(Games forumgame) {
		this.forumgame = forumgame;
	}

	public List<Messages> getMessages() {
		return messages;
	}

	public void setMessages(List<Messages> messages) {
		this.messages = messages;
	}

	@Override
	public String toString() {
		return "Forums [f_id=" + f_id + ", g_id=" + g_id + ", title=" + title + ", posttime=" + posttime + ", sticky="
				+ sticky + ", forumgame=" + forumgame + ", messages=" + messages + "]";
	}

	
	
}
