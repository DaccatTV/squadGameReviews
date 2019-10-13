import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/service/games.service'
import { Forum } from 'src/app/models/forum';
import { Game } from 'src/app/models/game';
import { ForumService } from 'src/app/service/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private forumservice: ForumService) { }

  forumList: Forum[];
  gameObj: Game;
  gameObjString: string;
  selectedForum: Forum;
  title: string;
  newForum: Forum;
  date: Date;
  dateString: string;

  ngOnInit() {
    this.gameObjString = sessionStorage.getItem('gameObj');
    this.gameObj = JSON.parse(this.gameObjString);
    this.forumList = this.gameObj.forumList;
  }

  storeSessionForum(i: number){
    this.selectedForum = this.forumList[i];
    sessionStorage.setItem("forumObj", JSON.stringify(this.selectedForum));
  }

  submitForm(){
    this.newForum = new Forum(null, null, null, null, null, null);
    this.newForum.title = this.title;
    this.dateString = ((new Date().getMonth() + 1).toString() + "/" + new Date().getDate().toString() + "/" + new Date().getFullYear().toString())
    this.newForum.posttime = this.dateString;
    this.newForum.sticky = 0;
    this.newForum.messages = [];
    this.newForum.forumgame = this.gameObj;

    this.forumservice.addForum(this.newForum).subscribe(
      (response) => {
        console.log("success!");
      },
      (response) => {
        console.log("failure...")
      }
    ) 
   
  }

}
