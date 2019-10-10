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
  
// append_json(data){
//   var table = document.getElementById('game_table');
//   data.forEach(function(object) {
//       var tr = document.createElement('tr');
//       tr.innerHTML = '<td>' + object.gname + '</td>' +
//       '<td>' + object.publisher + '</td>' +
//       '<td>' + object.overview + '</td>' +
//       '<td>' + object.esrb + '</td>';
//       table.appendChild(tr);
//   });
// }//end append_json



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




};






getGameData(){

console.log("entering getGameData function");

  var xmlhttp;

    xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() { 
            if (this.readyState == 4 && this.status == 200) {//when a good response is given do this

                //console.log(this.responseText);
                var data = JSON.parse(this.responseText); // convert the response to a json object
                //append_json(data);// pass the json object to the append_json function

                var table = document.getElementById('game_table');
                data.forEach(function(object) {
                    var tr = document.createElement('tr');
                    tr.innerHTML = '<td>' + object.gname + '</td>' +
                    '<td>' + object.publisher + '</td>' +
                    '<td>' + object.overview + '</td>' +
                    '<td>' + object.esrb + '</td>';
                    table.appendChild(tr);
                });
               
            }
        }
        //set the request destination and type
        xmlhttp.open("GET", "localhost:8080/games", true);
        //set required headers for the request
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded","Access-Control-Allow-Origin");
        // send the request
        xmlhttp.send();

}//end getGameData

  }
