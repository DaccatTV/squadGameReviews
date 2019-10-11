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

//get all games and add them to the table.
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



//Search for a game by it's name.
gameSearchByName(){

//this error is fine. Ignore it. Compiles fine. Typescript being dumb.
// It reads the ignore. It MUST be commented out to work. 
// @ts-ignore
 var name = document.getElementById('gameSearchField').value;


  this.allGames.subscribe(


    (response)=>{
      console.log(response);
      var data = response;

      var table = document.getElementById('game_table');
      data.forEach(function(object) {

        console.log("before if statement");
        console.log(object.gname);
        console.log("name is: " + name);

          if(name.toUpperCase() === object.gname.toUpperCase()){

            console.log("entering if statement");

            var tr = document.createElement('tr');
                    tr.innerHTML = '<td>' + object.gname + '</td>' +
                    '<td>' + object.publisher + '</td>' +
                    '<td>' + object.overview + '</td>' +
                    '<td>' + object.esrb + '</td>';
                    table.appendChild(tr);





          }//end if


        }); //end data.for each
        } //end response
      ) //end subscribe
}//end gameSearchByName
  }//end export class
