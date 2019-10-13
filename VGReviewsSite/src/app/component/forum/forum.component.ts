import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/service/games.service'
import { Forum } from 'src/app/models/forum';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private games: GamesService) { }

  forumList: Forum[];
  gameObj: Game;
  gameObjString: string;

  ngOnInit() {
    this.gameObjString = sessionStorage.getItem('gameObj');
    this.gameObj = JSON.parse(this.gameObjString);
    this.forumList = this.gameObj.forumList;
  }

}
