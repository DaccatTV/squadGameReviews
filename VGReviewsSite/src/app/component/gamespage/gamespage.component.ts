import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/service/games.service';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-gamespage',
  templateUrl: './gamespage.component.html',
  styleUrls: ['./gamespage.component.css']
})
export class GamespageComponent implements OnInit {

  constructor(private gameService : GamesService) { }

  ngOnInit() {

  }

  allGames : Observable<Game[]> = this.gameService.getListGames();

getAllGameData(){

  this.allGames.subscribe(


(response)=>{
  console.log(response);
  var data = response;
  var table = document.getElementById('game_table');
                data.forEach(function(object) {
                    var tr = document.createElement('tr');
                    tr.innerHTML = '<td>' + object.gname + '</td>' +
                    '<td>' + object.publisher + '</td>' +
                    '<td>' + object.overview + '</td>' +
                    '<td>' + object.esrb + '</td>';
                    table.appendChild(tr);
                });
},

(response)=>{
  console.log("error");
}

  )
}; //ends get all game data

  }//end export class
