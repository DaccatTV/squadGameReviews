import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/service/games.service'
import { Observable } from 'rxjs';
import { Forum } from 'src/app/models/forum';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private games: GamesService) { }

  tempGame: Observable<Game> = this.games.getGame(Number(sessionStorage.getItem('gameid')));
  forumList: Forum[];

  ngOnInit() {
  }

  getForums(){
    //sessionStorage.getItem('gameid')
    this.tempGame.subscribe(
      (response) => {
        console.log(response);
        this.forumList = response.forumList;
        //this.getActiveConsole();
        console.log(this.forumList);
      },
      (response) => {
        console.log("Error loading forums.");
      }
    )
  }

}
